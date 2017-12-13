import React, { Component } from 'react';

import './LandingImage.css';
import FILLER from '../../../../utils/FillerData';
import LandingText from './LandingText';

class LandingImage extends Component {
  render() {
    return (
      <div styleName={'container'}>
        <img styleName={'background-image'} src={FILLER.background_image} alt="Infamous" />
        <LandingText />
      </div>
    );
  }
}

export default LandingImage;
