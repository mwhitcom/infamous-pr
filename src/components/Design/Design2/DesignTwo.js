import React, { Component } from 'react';

import './DesignTwo.css';
import NavBlock from './NavBlock';
import FooterBlock from './FooterBlock';

class DesignTwo extends Component {
  render() {
    return (
      <div styleName={'container'}>
        <div styleName={'page-content'}>
          <NavBlock />
          <FooterBlock landing={'true'} />
        </div>
      </div>
    );
  }
}

export default DesignTwo;
