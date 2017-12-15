import React from 'react';
import { Link } from 'react-router-dom';

import './NavBlock.css';

export default function NavBlock() {
  return (
    <div styleName={'container'}>
      <img styleName={'image'} src="/assets/images/infamous_logo_white.png" alt="Infamous" />
      <ul styleName={'link-list'}>
        <li><Link to="/design-2/news">NEWS</Link></li>
        <li><a href="#">CLIENTS</a></li>
      </ul>
    </div>
  );
}
