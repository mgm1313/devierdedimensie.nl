import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

function DownloadButton({ download }) {
  return (
    <OutboundLink
      className="inline-flex mx-2 items-center group pt-3 text-xs sm:text-sm 2xl:text-base text-gray-500 hover:underline text-left"
      href={download.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg
        className="flex-shrink-0 w-3 2xl:w-4 h-3 2xl:h-4 transform group-hover:scale-125 transition duration-200 ease-in-out mr-1 sm:mr-1.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
      <span className="leading-tight">
        <span>{download.title}</span>
        {` `}
        <span className="hidden md:inline-block text-xs">
          ({download.size})
        </span>
      </span>
    </OutboundLink>
  );
}

export default DownloadButton;
