import React, { Component } from 'react';

import './ClientPage.css';
import Data from '../../utils/FillerData';
import FooterBlock from '../Landing_News/FooterBlock';

class ClientPage extends Component {
  render() {
    return (
      <div stlyeName={'container'}>
        <div styleName={'page-content'}>
          <FooterBlock type='client' clientName='PETE TONG' />
          <div styleName={'client-content'}>
            Hello
          </div>
        </div>
      </div>
    );
  }
}

export default ClientPage;
