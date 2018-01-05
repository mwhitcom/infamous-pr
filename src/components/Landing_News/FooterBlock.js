import React from 'react';
import { Link } from 'react-router-dom';

import './FooterBlock.css';

export default function FooterBlock(props) {
  function content() {
    if (props.landing === 'true') {
      return (
        <ul styleName={'footer-list'}>
          <li styleName={'address'}>8511 Washington Blvd, Culver City, CA 90232</li>
          <li styleName={'landing-nav'}>
            <a styleName={'link'} href="#">CLIENTS</a>
            <a styleName={'link'} href="#">ABOUT</a>
            <a styleName={'link'} href="#">NEWS</a>
            <a styleName={'link'} href="#">SERVICES</a>
            <a styleName={'link'} href="#">CONTACT</a>
          </li>
        </ul>
      );
    }
    return (
      <ul styleName={'footer-list'}>
        <li styleName={'home-link'}><Link to="/design-2">INFAMOUS</Link></li>
        <li styleName={'nav-links'}>
          <a styleName={'link'} href="#">CLIENTS</a>
          <a styleName={'link'} href="#">ABOUT</a>
          <Link styleName={'link'} to="/">NEWS</Link>
          <a styleName={'link'} href="#">SERVICES</a>
          <a styleName={'link'} href="#">CONTACT</a>
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
