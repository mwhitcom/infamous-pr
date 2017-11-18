import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="full-nav-container">
        <div className="logo-container">
          <Link to="/">
            <img className="white-logo" src="/assets/images/infamous_logo_black.png" alt="Infamous" />
          </Link>
        </div>
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

export default Navbar;
