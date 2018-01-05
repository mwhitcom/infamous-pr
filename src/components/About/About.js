import React, { Component } from 'react';

import FILLER from '../../utils/FillerData';

class About extends Component {
  render() {
    const text = FILLER.text.map((para, index) => <p className="para-text" key={index}>{para}</p>);
    return (
      <div>
        {text}
      </div>
    );
  }
}

export default About;
