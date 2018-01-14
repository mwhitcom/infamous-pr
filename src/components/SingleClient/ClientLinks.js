import React from 'react';

import './ClientLinks.css';

export default function BioBlock() {
  return (
    <div styleName={'container'}>
      <ul styleName={'sub-container'}>
        <li styleName={'link-item'}><a href="https://www.google.com/" target="_blank"><img src="/assets/images/facebook-simple.png" alt="Facebook" /></a></li>
        <li styleName={'link-item'}><a href="https://www.google.com/" target="_blank"><img src="/assets/images/twitter-simple.png" alt="Facebook" /></a></li>
        <li styleName={'link-item'}><a href="https://www.google.com/" target="_blank"><img src="/assets/images/instagram-simple.png" alt="Facebook" /></a></li>
        <li styleName={'link-item'}><a href="https://www.google.com/" target="_blank"><img src="/assets/images/youtube-simple.png" alt="Facebook" /></a></li>
        <li styleName={'kit-item'}><button>Press Kit</button></li>
      </ul>
      <ul styleName={'sub-container'}>
        <a styleName={'web-link'} href="https://www.google.com/" target="_blank"><li>Soundcloud</li></a>
        <a styleName={'web-link'} href="https://www.google.com/" target="_blank"><li>Website</li></a>
      </ul>
      <div styleName={'title-container'}>
        <h2>LATEST NEWS</h2>
      </div>
    </div>
  );
}
