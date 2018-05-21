import React from 'react'
import ReactPlayer from 'react-player'

import './video.css'

const Video = () => (
  <div styleName="container">
    <div className="video-container">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=qv4IpTFfpD4"
        loop
        volume={0.2}
        height="75vh"
        width="100%"
      />
    </div>
  </div>
)

export default Video
