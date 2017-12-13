import React from 'react';

import './LandingText.css';

export default function LandingText() {
  return (
    <div styleName={'container'}>
      <img styleName={'logo'} src="/assets/images/infamous_logo_black.png" alt="Infamous" />
      <h1 styleName={'dek-text'}>A full-service public relations firm dedicated to serving the needs of the electronic music community.</h1>
      <ul styleName={'button-list'}>
        <li><button styleName={'button'}>Learn more about us</button></li>
        <li><button styleName={'button'}>Client list</button></li>
      </ul>
    </div>
  );
}
