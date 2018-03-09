import React from 'react';
import ReactPlayer from 'react-player';

import './Video.css';

export default function NavBlock() {
  return (
    <div styleName={'container'}>
      <div className="video-container">
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=1BV7_O3f56w'
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
