import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './Landing.css';
import Video from './Video';
import Navbar from '../Navigation/Navbar';

class Landing extends Component {
  render() {
    return (
      <div styleName={'container'}>
        <Helmet>
          <title>INFAMOUS</title>
        </Helmet>
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
