import React from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';

import './ListGrid.css'
import SingleStory from './SingleStory';
import SingleClient from './SingleClient';
import SiteInfo from './SiteInfo';

export default function ListGrid(props) {
  let text = 'CREATE NEW';
  let link;
  let content;
  if(props.type === 'NEWS'){
    link = 'news-edit';
    content = props.stories.map(story => {
      return <SingleStory data={story} />;
    }); 
  } else if (props.type === 'CLIENTS'){
    link = 'client-edit';
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
          <Link to={`/admin/${link}`}><RaisedButton label={text} secondary={true} fullWidth={true} /></Link>
        </div>
      </div>
      <div styleName={'client-box'}>
        {content}
      </div>
    </div>
  );
}
