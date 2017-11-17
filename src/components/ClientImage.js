import React, { Component } from 'react';

import FILLER from '../utils/FillerData';

class ClientImage extends Component {
  render() {
    return (
      <div className="client-image-container">
        <div className="client-name-container">
        </div>
        <img className="client-page-image" src={FILLER.client_image} alt="client name" />
      </div>
    );
  }
}

export default ClientImage;
