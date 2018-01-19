import React from 'react';
import { Paper, RaisedButton } from 'material-ui';

import './DataGrid.css';

export default function DataGrid(props) {
  return (
    <div styleName={'container'}>
      <ul styleName={'title-box'}>
        <li>{props.type}</li>
        <li>
          <RaisedButton styleName={'button'} label="Create" secondary={true} />
        </li>
      </ul>
      <Paper styleName={'box'} zDepth={3} />
    </div>
  );
}
