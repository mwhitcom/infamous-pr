import React, { Component } from 'react';

import Navbar from './Navbar';
import VideoBackground from './VideoBackground';
import NewsGrid from './NewsGrid';

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <VideoBackground />
        <NewsGrid />
      </div>
    );
  }
}

export default Landing;
