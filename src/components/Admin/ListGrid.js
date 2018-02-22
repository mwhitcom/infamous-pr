import React from 'react';
import { RaisedButton } from 'material-ui';

import './ListGrid.css'
import SingleStory from './SingleStory';
import SingleClient from './SingleClient';
import SiteInfo from './SiteInfo';

export default function ListGrid(props) {
  let text = 'CREATE NEW';
  let content;
  if(props.type === 'NEWS'){
    content = props.stories.map(story => {
      return <SingleStory data={story} />;
    }); 
  } else if (props.type === 'CLIENTS'){
    content = props.clients.map(client => {
      return (
        <SingleClient data={client}/>
      );
    });   
  } else {
    content = <SiteInfo />
    text = 'EDIT'
  }

  return (
    <div styleName={'container'}>
      <div styleName={'title-box'}>
        <h1 styleName={'title'}>{props.type}</h1>
        <div styleName={'button-box'}>
          <RaisedButton label={text} secondary={true} fullWidth={true} />
        </div>
      </div>
      <div styleName={'client-box'}>
        {content}
      </div>
    </div>
  );
}
