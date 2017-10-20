import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class VideoBackground extends Component {
  render() {
    return (
      <div className="video-container">
        <ReactPlayer 
          url="https://www.youtube.com/watch?v=1BV7_O3f56w"
          playing="true"
          loop="true"
          muted="true"
          height="100vh"
          width="100vw"
        />
      </div>
    );
  }
}

export default VideoBackground;
