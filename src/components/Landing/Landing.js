import React, { Component } from 'react';

import './Landing.css';
import Video from './Video';
import Navbar from '../Navigation/Navbar';

class Landing extends Component {
  render() {
    return (
      <div styleName={'container'}>
        <div styleName={'logo-box'}>
          <img styleName={'image'} src="/assets/images/infamous_logo_black.png" alt="Infamous" />
        </div>
        <div styleName={'page-content'}>
          <Video />
          <Navbar type={'landing'} />
        </div>
      </div>
    );
  }
}

export default Landing;
