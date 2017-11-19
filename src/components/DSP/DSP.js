import React, { Component } from 'react';

import Navbar from '../Navigation/Navbar';
import FILLER from '../../utils/FillerData';

class DSP extends Component {
  render() {
    const text = FILLER.text.map((para, index) => <p className="para-text" key={index}>{para}</p>);
    return (
      <div>
        <Navbar />
        <div className="dsp-text">
          {text}
        </div>
      </div>
    );
  }
}

export default DSP;
