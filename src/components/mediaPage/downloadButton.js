import React, { Component } from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

class DownloadButton extends Component {
  render() {
    const event = this.props.event;
    const download = this.props.download;

    return (
      <OutboundLink
        className={`bg-transparent sm:hover:bg-${event.color} text-gray-900 sm:hover:text-white font-semibold sm:py-1/2 xl:py-1 sm:px-2 xl:px-3 2xl:px-4 mx-2 sm:mx-1 sm:border-2 sm:border-${event.color} hover:border-transparent inline-flex items-center`}
        href={download.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg
          className="fill-current w-3 xl:w-4 h-3 xl:h-4 mr-1 sm:mr-2"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span className="text-sm xl:text-base">
          {download.title}
          {` `}
          <span className="text-xs xl:text-sm">({download.size})</span>
        </span>
      </OutboundLink>
    );
  }
}

export default DownloadButton;
