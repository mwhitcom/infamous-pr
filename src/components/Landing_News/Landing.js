import React, { Component } from 'react';

import NavbarLanding from '../Navigation/NavbarLanding';
import VideoBackground from './VideoBackground';
import NewsGrid from './NewsGrid';

class Landing extends Component {
  render() {
    return (
      <div>
        <NavbarLanding />
        <VideoBackground />
        <NewsGrid />
      </div>
    );
  }
}

export default Landing;
