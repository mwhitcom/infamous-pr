import React from 'react';

import './infoGrid.css'
import SiteInfo from './siteEdit/SiteEdit';

const InfoGrid = (props) => {
  return (
    <div styleName="container">
      <div styleName="title-box">
        <h1 styleName="title">SITE INFO</h1>
      </div>
      <div styleName="client-box">
        <SiteInfo info={props.info}/>
      </div>
    </div>
  );
}

export default InfoGrid;
