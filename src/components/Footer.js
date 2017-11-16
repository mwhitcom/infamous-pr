import React, { Component } from 'react';

import FILLER from '../utils/FillerData';

class Footer extends Component { 
  render() {
    return (
      <div className="footer-container">
        <ul className="footer">
          <li>{FILLER.footer_name}</li>
          <li>{FILLER.footer_address}</li>
          <li>{FILLER.footer_signature}</li>
        </ul>
      </div>
    );
  }
}

export default Footer;
