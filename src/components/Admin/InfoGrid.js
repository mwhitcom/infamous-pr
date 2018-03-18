import React from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
import moment from 'moment';

import './InfoGrid.css'
import SiteInfo from './SiteInfo';

export default function InfoGrid(props) {
  return (
    <div styleName={'container'}>
      <div styleName={'title-box'}>
        <h1 styleName={'title'}>SITE INFO</h1>
      </div>
      <div styleName={'client-box'}>
        <SiteInfo info={props.info}/>
      </div>
    </div>
  );
}
