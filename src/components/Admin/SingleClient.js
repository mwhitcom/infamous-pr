import React from 'react';
import { Paper, RaisedButton } from 'material-ui';

import './SingleClient.css';

export default function SingleClient(props) {
  return (
    <Paper styleName={'box'} zDepth={3}>
      <div styleName={'image-box'}>
        <img src={props.data.image} alt={props.data.name} />
      </div>
      <div styleName={'text-box'}>
        <h1>{props.data.name}</h1>
      </div>
      <ul styleName={'button-box'}>
        <li><RaisedButton label="Edit" primary={true} /></li>
        <li><RaisedButton label="Delete" secondary={true} /></li>
      </ul>
    </Paper>
  );
}
