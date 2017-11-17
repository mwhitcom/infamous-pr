import React, { Component } from 'react';

import FILLER from '../utils/FillerData';

class ClientBio extends Component {
  render() {
    const text = FILLER.text.map((para, index) => <p className="para-text" key={index}>{para}</p>);
    
    return (
      <div className="client-bio-container">
        {text}
      </div>
    );
  }
}

export default ClientBio;
