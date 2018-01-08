import React, { Component } from 'react';

import './Landing.css';
import Video from './Video';
import FooterBlock from './FooterBlock';
import News from './News';

class Landing extends Component {
  render() {
    return (
      <div>
        <div styleName={'logo-box'}>
          <img styleName={'image'} src="/assets/images/infamous_logo_black.png" alt="Infamous" />
        </div>
        <div styleName={'container'}>
          <div styleName={'page-content'}>
            <Video />
            <FooterBlock type={'landing'} />
          </div>
        </div>
        <News />
      </div>
    );
  }
}

export default Landing;
