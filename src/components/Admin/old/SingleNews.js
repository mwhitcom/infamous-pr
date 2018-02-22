import React from 'react';
import { Paper, RaisedButton } from 'material-ui';

import './SingleNews.css';

export default function SingleNews(props) {
  return (
    <Paper styleName={'box'} zDepth={3}>
      <div styleName={'image-box'}>
        <img src={props.data.image_url} alt={'News'} />
      </div>
      <div styleName={'text-box'}>
        <h1>{props.data.title}</h1>
        <h2>{props.data.news_dek}</h2>
      </div>
      <div styleName={'edit-box'}>
        <RaisedButton styleName={'button'} label="Edit" primary={true} />
        <RaisedButton styleName={'button'} label="Delete" secondary={true} />
      </div>
    </Paper>
  );
}
