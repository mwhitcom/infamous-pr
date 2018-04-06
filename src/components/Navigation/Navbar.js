import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default function Navbar(props) {
  function content() {
    switch(props.type) {
      case 'landing':
        return (
          <ul styleName={'footer-list'}>
            <li styleName={'address'}>8511 Washington Blvd, Culver City, CA 90232</li>
            <li styleName={'landing-nav'}>
              <Link styleName={'link'} to="/clients">CLIENTS</Link>
              <Link styleName={'link'} to="/about">ABOUT</Link>
              <Link styleName={'link'} to="/news">NEWS</Link>
              <Link styleName={'link'} to="/services">SERVICES</Link>
              <Link styleName={'link'} to="/contact">CONTACT</Link>
            </li>
          </ul>
        );
      default:
        return (
          <ul styleName={'footer-list'}>
            <li styleName={'home-link logo'}>
              <Link to="/">
                <img styleName={'image'} src="/assets/images/infamous_logo_black.png" alt="Infamous" />
              </Link>
            </li>
            <li styleName={'nav-links full-nav'}>
              <Link styleName={'link'} to="/clients">CLIENTS</Link>
              <Link styleName={'link'} to="/about">ABOUT</Link>
              <Link styleName={'link'} to="/news">NEWS</Link>
              <Link styleName={'link'} to="/services">SERVICES</Link>
              <Link styleName={'link'} to="/contact">CONTACT</Link>
            </li>
          </ul>
        ); 
    }
  };

  return (
    <div styleName={'container'}>
      {content()}
    </div>
  );
}
