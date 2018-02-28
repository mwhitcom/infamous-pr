import React, { Component } from 'react';

import './About.css';
import Navbar from '../Navigation/Navbar';
import FILLER from '../../utils/FillerData';

class About extends Component {
  render() {
    const text = FILLER.text.map((para, index) => <p styleName={'para-text'} key={index}>{para}</p>);
    return (
      <div styleName={'container'}>
        <div styleName={'page-content'}>
          <Navbar />
          <div styleName={'text-content'}>
            {text}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
