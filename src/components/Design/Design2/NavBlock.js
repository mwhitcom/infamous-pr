import React from 'react';

import './NavBlock.css';

export default function NabBlock() {
  return (
    <div styleName={'container'}>
      <img styleName={'image'} src="/assets/images/infamous_logo_black.png" alt="Infamous" />
      <ul styleName={'link-list'}>
        <li><a href="#">NEWS</a></li>
        <li><a href="#">CLIENTS</a></li>
      </ul>
    </div>
  );
}
