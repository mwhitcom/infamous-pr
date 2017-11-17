import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarLanding extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/">
            <img className="white-logo" src="/assets/images/infamous_logo_white.png" alt="Infamous" />
          </Link>
        </div>
        <ul className="menu-list">
          <li><Link className="nav-link" to="/dsp">DSP</Link></li>
          <li><Link className="nav-link" to="/clients">Clients</Link></li>
          <li><Link className="nav-link" to="/">News</Link></li>
          <li><Link className="nav-link" to="/about">About</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavbarLanding;
