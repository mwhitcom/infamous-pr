import React from 'react';

import './FooterBlock.css';

export default function FooterBlock() {
  return (
    <div styleName={'container'}>
      <ul styleName={'footer-list'}>
        <li styleName={'address'}>8511 Washington Blvd, Culver City, CA 90232</li>
        <li styleName={'link'}><a href="#">ABOUT</a></li>
        <li styleName={'link'}><a href="#">DSP</a></li>
        <li styleName={'link'}><a href="#">CONTACT</a></li>
      </ul>
    </div>
  );
}
