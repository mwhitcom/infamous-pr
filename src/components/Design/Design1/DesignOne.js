import React, { Component } from 'react';

import './DesignOne.css';

import Navbar from './components/Navbar';
import LandingImage from './components/LandingImage';
import NewsGrid from './components/NewsGrid';

class DesignOne extends Component {
  render() {
    return (
      <div styleName={'container'}>
        <Navbar />
        <div styleName={'page-content'}>
          <LandingImage />
          <NewsGrid />
        </div>
      </div>
    );
  }
}

export default DesignOne;
