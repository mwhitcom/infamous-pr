import React, { Component } from 'react';

import Navbar from './Navbar';
import VideoBackground from './VideoBackground';

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <VideoBackground />
      </div>
    );
  }
}

export default Landing;
