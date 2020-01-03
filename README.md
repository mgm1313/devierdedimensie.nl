# De Vierde Dimensie
This repo houses the assets used to build the 'De Vierde Dimensie' website, available at https://devierdedimensie.nl.   
Goal of this project was to serve members of our student society media assets, that where generated during our anniversary year.

## Features
- Fast due to SSR and smart image optimalization;
- Provides users with the ability to download original files of all shown content;
- Free hosting (due to free-tier limits of [Google Firebase](https://firebase.google.com/pricing) and [Zeit Now](https://zeit.co/pricing)). 

## Tools
The website is built and developed using the [Gatsby](https://www.gatsbyjs.org) static site generator.

### Hosting 
This site is hosted on [Zeit Now](https://zeit.co/techmaus/xxiv-memories).   
- You can watch the source of the deployment via https://devierdedimensie.nl/_src.   
- To see a realtime stream of logs go to https://devierdedimensie.nl/_logs.
  
_Caution: you're required to create a Zeit account before being able to access above links._

### Photo's 
All image assets that live inside the [gallery pages](https://devierdedimensie.nl/media), are hosted via Cloud Storage for Firebase.   
References to the images live inside a Google Firestore database. On request I'm able to provide you access to this database to query the data. The database follows the following schema:

```
{
  "id" : {
    "name" : "filename",
    "category" : "string",
    "labels" : [ {
      "confidence" : "integer",
      "description" : "string",
      "locale" : "",
      "mid" : "string",
      "score" : "integer",
      "topicality" : "integer"
    } ],
    "metadata" : {
      "format" : "mime type",
      "width" : "integer",
      "height" : "integer",
      "size" : "string",
      "timestamp" : {
        "_nanoseconds" : "integer",
        "_seconds" : "integer"
      }
    },
    "placeholder" : "base64 representation of a 32x32px version of the image",
    "thumbnail" : "location to 200px width version of the image",
    "small" : "location to 400px width version of the image",
    "medium" : "location to 800px width version of the image",
    "large" : "location to 1200px width version of the image",
    "big" : "location to 1600px width version of the image",
    "original" : "location to original (unmodified) version of the image"
  }
}
```

## Contributing
Any and all contributions are welcome. Simply open an issue or submit a pull request.

## License
[MIT](https://choosealicense.com/licenses/mit/)
