import React from 'react';
import { Link } from 'react-router-dom';

import './FooterBlock.css';

export default function FooterBlock(props) {
  function content() {
    if (props.type === 'landing') {
      return (
        <ul styleName={'footer-list'}>
          <li styleName={'address'}>8511 Washington Blvd, Culver City, CA 90232</li>
          <li styleName={'landing-nav'}>
            <Link styleName={'link'} to="/clients">CLIENTS</Link>
            <Link styleName={'link'} to="/about">ABOUT</Link>
            <Link styleName={'link'} to="/">NEWS</Link>
            <Link styleName={'link'} to="/services">SERVICES</Link>
            <Link styleName={'link'} to="/contact">CONTACT</Link>
          </li>
        </ul>
      );
    } else if (props.type === 'nav') {
      return (
        <ul styleName={'footer-list'}>
          <li styleName={'home-link'}>
            <Link to="/">
              <img styleName={'image'} src="/assets/images/infamous_logo_black.png" alt="Infamous" />
            </Link>
          </li>
          <li styleName={'nav-links full-nav'}>
            <Link styleName={'link'} to="/clients">CLIENTS</Link>
            <Link styleName={'link'} to="/about">ABOUT</Link>
            <Link styleName={'link'} to="/">NEWS</Link>
            <Link styleName={'link'} to="/services">SERVICES</Link>
            <Link styleName={'link'} to="/contact">CONTACT</Link>
          </li>
        </ul>
      );
    } else if (props.type === 'client') {
      return (
        <ul styleName={'footer-list'}>
          <li styleName={'home-link'}>
            <h1 styleName={'client-title'}>{props.clientName}</h1>
          </li>
          <li styleName={'nav-links client-nav'}>
            <Link styleName={'link'} to="/clients">CLIENTS</Link>
            <Link styleName={'link'} to="/about">ABOUT</Link>
            <Link styleName={'link'} to="/">NEWS</Link>
            <Link styleName={'link'} to="/services">SERVICES</Link>
            <Link styleName={'link'} to="/contact">CONTACT</Link>
          </li>
        </ul>
      );
    }
    return (
      <ul styleName={'footer-list'}>
        <li styleName={'home-link'}><Link to="/">INFAMOUS</Link></li>
        <li styleName={'nav-links'}>
          <Link styleName={'link'} to="/clients">CLIENTS</Link>
          <Link styleName={'link'} to="/about">ABOUT</Link>
          <Link styleName={'link'} to="/">NEWS</Link>
          <Link styleName={'link'} to="/services">SERVICES</Link>
          <Link styleName={'link'} to="/contact">CONTACT</Link>
        </li>
      </ul>
    );
  }

  return (
    <div styleName={'container'}>
      {content()}
    </div>
  );
}
