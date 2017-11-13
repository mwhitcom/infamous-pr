import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleClient extends Component {
  render() {
    return (
      <div className="single-client-container">
        <Link className="client-link" to="/client/client-name">
          <div className="client-thumbnail-container">
            <img className="client-thumbnail" src="https://ichef.bbci.co.uk/images/ic/1200x675/p02xxgn9.jpg" alt="Client Name"/>
          </div>
          <h1 className="client-name">Pete Tong</h1>
        </Link>
      </div>
    );
  }
}

export default SingleClient;
