import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import DownloadButton from "./downloadButton";
import VideoItem from "./videoItem";
import GalleryItem from "./galleryItem";

function GallerySection({ index, event, items }) {
  const galleryInfo = useStaticQuery(graphql`
    {
      allImages {
        group(field: category) {
          totalCount
          fieldValue
        }
      }
    }
  `);

  return (
    <section
      className={`my-8 bigm:my-10 sm:my-16 xl:my-20 ${
        index % 2 !== 0 && `text-right`
      }`}
      id={event.eventID}
    >
      <h3 className="uppercase leading-none font-semibold text-xl bigm:text-2xl sm:text-3xl md:text-4xl 2xl:text-3xl">
        {event.date}
      </h3>
      <h2
        className={`text-${event.color} uppercase font-bold leading-none tracking-wide text-3xl bigm:text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl`}
      >
        {event.title}
      </h2>

      <div
        className={`flex item-center justify-${
          index % 2 !== 0 ? `end` : `start`
        } -mt-2 mb-4 -mx-2`}
      >
        {event.downloads.map((download) => (
          <DownloadButton key={download.url} download={download} />
        ))}
      </div>

      <div className="gallerys">
        <ul className="grid grid-cols-12 gap-2">
          {event.videos.map((video) => (
            <VideoItem key={video.id} theme={event.color} video={video} />
          ))}

          {items.map((item) => {
            const album = item.node;

            return (
              <GalleryItem
                key={album.id}
                countItems={
                  galleryInfo.allImages.group.find(
                    (el) => el.fieldValue === album.frontmatter.category
                  ).totalCount
                }
                gallery={album}
                theme={event.color}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default GallerySection;
