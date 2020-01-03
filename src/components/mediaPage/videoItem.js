import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: true
    };
  }

  render() {
    const video = this.props.video;

    return (
      <li
        className={`aspect-ratio-box aspect-ratio-${video.ratio} relative flex-none w-full md:w-1/3 lg:w-1/4 p-2px`}
      >
        <span
          className={`${
            this.state.showTitle ? `visible` : `invisible`
          } gallery-item-title left-0 bottom-0 p-3 absolute text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-left text-white uppercase font-bold tracking-wider leading-none pointer-events-none`}
          style={{
            wordBreak: `break-word`,
            textShadow: `0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)`
          }}
        >
          <svg
            className="fill-current inline-block h-3 w-3 mr-2 sm:h-4 sm:w-4 align-baseline"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 7l4-4v14l-4-4v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v3zm-8 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
          </svg>
          {video.title}
        </span>

        <ReactPlayer
          className="h-full"
          controls={true}
          height="100%"
          light={true}
          onReady={() => this.setState({ showTitle: false })}
          playing={true}
          playsinline={false}
          url={`https://www.youtube.com/watch?v=` + video.id}
          width="100%"
        />
      </li>
    );
  }
}

export default VideoItem;
