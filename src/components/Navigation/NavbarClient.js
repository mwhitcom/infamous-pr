import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FILLER from '../../utils/FillerData';

class NavbarClient extends Component {
  render() {
    return (
      <div className="full-nav-container">
        <h1 className="client-image-name" >{FILLER.client_name}</h1>
        <ul className="menu-list">
          <li><Link className="full-nav-link" to="/dsp">DSP</Link></li>
          <li><Link className="full-nav-link" to="/clients">Clients</Link></li>
          <li><Link className="full-nav-link" to="/">News</Link></li>
          <li><Link className="full-nav-link" to="/about">About</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavbarClient;
