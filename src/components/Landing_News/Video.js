import React from 'react';
import ReactPlayer from 'react-player';

import './Video.css';
import FILLER from '../../utils/FillerData';

export default function NavBlock() {
  return (
    <div styleName={'container'}>
      <div className="video-container">
        <ReactPlayer 
          url={FILLER.background_video_url}
          playing="true"
          loop="true"
          muted="true"
          height="75vh"
          width="100%"
        />
      </div>
    </div>
  );
}
