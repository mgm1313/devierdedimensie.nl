/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

const functions = require("firebase-functions");
const mkdirp = require("mkdirp-promise");
const vision = require("@google-cloud/vision");
const exifReader = require("exif-reader");
const path = require("path");
const os = require("os");
const fs = require("fs");
const sharp = require("sharp");
const admin = require("firebase-admin");
admin.initializeApp();
const uuidv4 = require("uuid/v4");

const sizes = [200, 400, 800, 1200, 1600];
const THUMB_PREFIX = "s@";

const runtimeOpts = {
  memory: "1GB"
};

/**
 * When an image is uploaded in the Storage bucket We generate a thumbnail automatically using
 * Sharp.
 */
exports.createImage = functions
  .region("europe-west1")
  .runWith(runtimeOpts)
  .storage.object()
  .onFinalize(async object => {
    const filePath = object.name; // File path in the bucket.
    const contentType = object.contentType; // This is the image MIME type.
    const fileDir = path.dirname(filePath);
    const fileName = path.basename(filePath); // Get the file name.
    const fileBucket = object.bucket; // The Storage bucket that contains the file.
    const extension = path.extname(filePath); // extension of this file (eg. .jpg).

    const random = uuidv4();

    const tempLocalFile = path.join(os.tmpdir(), filePath);
    const tempLocalDir = path.dirname(tempLocalFile);

    // Exit if this is triggered on a file that is not an image.
    if (!contentType.startsWith("image/")) {
      return console.log("This is not an image.");
    }

    // Exit if the image is already a thumbnail.
    if (fileName.startsWith(THUMB_PREFIX)) {
      return console.log("Already a Thumbnail.");
    }

    // Cloud Storage files.
    const bucket = admin.storage().bucket(fileBucket); // Download file from bucket.
    const file = bucket.file(filePath);
    const metadata = {
      contentType: contentType,
      // To enable Client-side caching you can set the Cache-Control headers here. Uncomment below.
      cacheControl: "public, max-age=31536000"
    };

    // Create the temp directory where the storage file will be downloaded.
    await mkdirp(tempLocalDir);

    // Download file from bucket.
    await file.download({ destination: tempLocalFile });

    console.log("The file has been downloaded to", tempLocalFile);

    const placeholderBuffer = await sharp(tempLocalFile)
      .resize({ width: 32, height: 32, fit: sharp.fit.outside })
      .jpeg({ quality: 25 })
      .toBuffer();
    const placeholderBase64 = placeholderBuffer.toString("base64");

    const uploadPromises = sizes.map(async size => {
      const thumbFileName = `${THUMB_PREFIX}${size}_${random}${extension}`;
      const thumbFilePath = path.normalize(path.join(fileDir, thumbFileName));
      const thumbFile = bucket.file(thumbFilePath);
      const tempLocalThumbFile = path.join(os.tmpdir(), thumbFilePath);

      // Generate a thumbnail using Sharp.
      await sharp(tempLocalFile)
        .resize({ width: size, height: size, fit: sharp.fit.inside })
        .toFile(tempLocalThumbFile);
      console.log("Thumbnail created at", tempLocalThumbFile);

      // Uploading the thumbnail.
      await bucket.upload(tempLocalThumbFile, {
        destination: thumbFilePath,
        metadata: metadata
      });
      console.log("Thumbnail uploaded to Storage at", thumbFilePath);

      fs.unlinkSync(tempLocalThumbFile);
      await thumbFile.makePublic();
      const [thumbMetadata] = await thumbFile.getMetadata();

      return thumbMetadata.mediaLink;
    });

    // Get EXIF data on image
    const imageMetadata = await sharp(tempLocalFile).metadata();
    const exif = await exifReader(imageMetadata.exif);
    const [fileMetadata] = await file.getMetadata();

    let timestamp;
    if (typeof exif.exif.DateTimeOriginal !== "undefined") {
      timestamp = admin.firestore.Timestamp.fromDate(
        new Date(exif.exif.DateTimeOriginal)
      );
    } else {
      timestamp = new admin.firestore.Timestamp(0, 0);
    }

    console.log("Got EXIF and file metadata.");

    // Get the public URLs of thumb files.
    const thumbsMeta = await Promise.all([...uploadPromises]);

    console.log("Got file paths.");

    // Once the image has been uploaded delete the local files to free up disk space.
    fs.unlinkSync(tempLocalFile);

    // Tag the image content using the Cloud Vision API.
    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Performs label detection on the local file
    const [result] = await client.labelDetection(
      `gs://${object.bucket}/${object.name}`
    );
    const labels = result.labelAnnotations;

    console.log("Succesfully detected labels.");

    // Add image to the Database.
    await admin
      .database()
      .ref("images")
      .push({
        name: path.basename(filePath, extension),
        category: fileDir,
        original: fileMetadata.mediaLink,
        placeholder: placeholderBase64,
        thumbnail: thumbsMeta[0],
        small: thumbsMeta[1],
        medium: thumbsMeta[2],
        large: thumbsMeta[3],
        big: thumbsMeta[4],
        labels: labels,
        metadata: {
          format: imageMetadata.format,
          width: imageMetadata.width,
          height: imageMetadata.height,
          size: fileMetadata.size,
          timestamp: timestamp
        }
      });

    await file.makePublic();
    await file.setMetadata(metadata);

    return console.log("Image saved to database.");
  });
