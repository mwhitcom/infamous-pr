import React from 'react';

import './Navbar.css';

export default function Navbar() {
  return (
    <div styleName={'container'}>
      <ul styleName={'menu-list'}>
        <li styleName={'logo-item menu-button'}><img src="/assets/images/menu.png" alt="Menu" /></li>
        <li styleName={'name-item'}>INFAMOUS</li>
        <li styleName={'logo-item social'}><img src="/assets/images/facebook-simple.png" alt="Facebook" /></li>
        <li styleName={'logo-item social'}><img src="/assets/images/twitter-simple.png" alt="Twitter" /></li>
        <li styleName={'logo-item social'}><img src="/assets/images/instagram-simple.png" alt="Instagram" /></li>
      </ul>
    </div>
  );
}
