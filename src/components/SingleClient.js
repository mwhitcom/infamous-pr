import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FILLER from '../utils/FillerData';

class SingleClient extends Component {
  render() {
    return (
      <div className="single-client-container">
        <Link className="client-link" to="/client/pete-tong">
          <div className="client-thumbnail-container">
            <img className="client-thumbnail" src={FILLER.client_image} alt="Client Name" />
          </div>
          <h1 className="client-name">{FILLER.client_name}</h1>
        </Link>
      </div>
    );
  }
}

export default SingleClient;
