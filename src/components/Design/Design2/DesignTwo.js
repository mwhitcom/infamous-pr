import React, { Component } from 'react';

import './DesignTwo.css';
import FILLER from '../../../utils/FillerData';
import NavBlock from './NavBlock';
import FooterBlock from './FooterBlock';

class DesignTwo extends Component {
  render() {
    return (
      <div styleName={'container'}>
        <div styleName={'page-content'}>
          <NavBlock />
          <FooterBlock />
        </div>
      </div>
    );
  }
}

export default DesignTwo;
