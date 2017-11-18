import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import FILLER from '../../utils/FillerData';

class VideoBackground extends Component {
  render() {
    return (
      <div className="video-container">
        <ReactPlayer 
          url={FILLER.background_video_url}
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
