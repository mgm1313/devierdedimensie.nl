import React from "react";
import ReactPlayer from "react-player";

import { Waypoint } from "react-waypoint";

function VideoItem({ video, theme }) {
  const [showYT, setShowYT] = React.useState(false);
  const [isPlaceholderLoaded, setIsPlaceholderLoaded] = React.useState(false);
  const [inView, setInView] = React.useState(false);

  return (
    <Waypoint
      bottomOffset="10%"
      fireOnRapidScroll={false}
      topOffset="10%"
      onEnter={() => {
        setInView(true);
      }}
      onLeave={() => {
        setInView(false);
      }}
    >
      <li className="group relative col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6 lg:row-span-2">
        <div className="w-full h-full bg-white relative rounded-sm shadow pb-7/12 lg:pb-1/2">
          {!showYT && (
            <>
              {(inView || isPlaceholderLoaded) && (
                <ReactPlayer
                  loop
                  muted
                  playsinline
                  className="background-video absolute inset-0 max-w-full max-h-full"
                  height="100%"
                  playing={inView}
                  url={video.placeholderVid}
                  width="100%"
                  onReady={() => setIsPlaceholderLoaded(true)}
                />
              )}
              {!isPlaceholderLoaded && (
                <img
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                  src={video.placeholderThumb}
                />
              )}
              <div className="absolute text-left top-0 left-0 ml-1.5 mt-1.5 sm:ml-3 sm:mt-3">
                <div
                  className={`text-xl lg:text-2xl uppercase font-semibold px-2 xl:px-4 py-0.5 lg:py-1 inline bg-${theme} text-white shadow-lg`}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: video.title,
                  }}
                  style={{
                    boxDecorationBreak: "clone",
                    wordBreak: "break-word",
                  }}
                />
              </div>
              <button
                className="absolute inset-0 w-full h-full flex items-center justify-center"
                type="button"
                onClick={() => setShowYT(true)}
              >
                <svg
                  className={`h-16 w-16 lg:h-20 lg:w-20 text-${theme}`}
                  fill="white"
                  viewBox="0 0 84 84"
                >
                  <rect
                    fill="currentColor"
                    height="64"
                    opacity="0.7"
                    width="64"
                    x="10"
                    y="10"
                  />
                  <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                </svg>
              </button>
            </>
          )}

          {showYT && (
            <ReactPlayer
              controls
              playing
              className="absolute inset-0 overflow-hidden"
              height="100%"
              playsinline={false}
              url={`https://www.youtube.com/watch?v=${video.id}`}
              width="100%"
            />
          )}
        </div>
      </li>
    </Waypoint>
  );
}

export default VideoItem;
