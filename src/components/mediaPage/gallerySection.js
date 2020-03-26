import React, { Component } from "react";

import DownloadButton from "./downloadButton";
import VideoItem from "./videoItem";
import GalleryItem from "./galleryItem";

class GallerySection extends Component {
  render() {
    const i = this.props.index;
    const event = this.props.event;
    const gallery = this.props.gallery;

    return (
      <section
        className={`my-8 bigm:my-10 sm:my-16 xl:my-20 ${
          i % 2 !== 0 && `text-right`
        }`}
        id={event.short}
      >
        <h2
          className={`text-${event.color} uppercase font-bold leading-none tracking-wide text-3xl bigm:text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl`}
        >
          {event.title}
        </h2>

        <div className="download-all mt-2 mb-4">
          <span className="block text-gray-700 text-xs xl:text-sm">
            Download het originele
            {` `}
            <span className="lowercase">{event.title}</span> materiaal
          </span>

          <div className="-mx-1">
            {event.downloads.map((download, i) => (
              <DownloadButton key={i} download={download} event={event} />
            ))}
          </div>
        </div>

        <div className="gallerys">
          <ul
            className={`flex flex-wrap -mx-2px ${i % 2 !== 0 && `justify-end`}`}
          >
            {event.videos.map((video, i) => (
              <VideoItem key={i} video={video} />
            ))}

            {gallery.edges.map((gallery) => (
              <GalleryItem key={gallery.node.id} gallery={gallery} />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default GallerySection;
