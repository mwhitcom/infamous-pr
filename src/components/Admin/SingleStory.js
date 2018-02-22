import React from 'react';
import { Paper, FlatButton } from 'material-ui';

import './SingleStory.css';

export default function SingleStory(props) {
  return(
    <Paper styleName={'container'} zDepth={3}>
      <div styleName={'image-container'}>
        <img src={props.data.image_url} alt={props.data.title}/>
      </div>
      <div styleName={'text-container'}>
        <h3>{`${props.data.date} - ${props.data.outlet}`}</h3>
        <h1>{props.data.title}</h1>
        <h2>{props.data.news_dek}</h2>
      </div>
      <div styleName={'button-container'}>
        <FlatButton label="EDIT" fullWidth={true} primary={true} />
        <FlatButton label="DELETE" fullWidth={true} primary={true} />
      </div>
    </Paper>
  );
}