import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <ul className="menu-list">
          <li>
            <img className="logo" src="/assets/images/infamous_logo_white.png" alt="Infamous" />
          </li>
          <li>About</li>
          <li>Clients</li>
          <li>Press Apps</li>
          <li>DSP</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
