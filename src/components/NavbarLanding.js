import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarLanding extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="logo-container">
          <img className="white-logo" src="/assets/images/infamous_logo_white.png" alt="Infamous" />
        </div>
        <ul className="menu-list">
          <li><Link className="nav-link" to="#">About</Link></li>
          <li><Link className="nav-link" to="#">Clients</Link></li>
          <li><Link className="nav-link" to="#">DSP</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavbarLanding;
