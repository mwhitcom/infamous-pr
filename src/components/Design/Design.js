import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Design.css';

class Design extends Component {
  render() {
    return (
      <div styleName={'design-page'}>
        <Link to="/"><img styleName={'image'} src="assets/images/infamous_logo_black.png" alt="Infamous" /></Link>
        <ul styleName={'list'}>
          <li>
            <Link to="/design-1"><button styleName={'button'}>Design 1</button></Link>
          </li>
          <li>
            <Link to="/design-2"><button styleName={'button'}>Design 2</button></Link>
          </li>
          <li>
            <Link to="/design-3"><button styleName={'button'}>Design 3</button></Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Design;
