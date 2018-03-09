import React from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
import moment from 'moment';

import './ListGrid.css'
import SingleStory from './SingleStory';
import SingleClient from './SingleClient';
import SiteInfo from './SiteInfo';

export default function ListGrid(props) {
  let text = 'CREATE NEW';
  let link;
  let content;
  let style = {
    display: props.type === 'SITE INFO' ? 'none' : 'inline'
  }
  if(props.type === 'NEWS'){
    link = 'news-edit';
    props.stories.sort ((a, b) => {
      return moment(a.data.date, 'MMMM DD, YYYY').toDate() - moment(b.data.date, 'MMMM DD, YYYY').toDate();
    });
    content = props.stories.reverse().map(story => {
      return <SingleStory data={story} />;
    }); 
  } else if (props.type === 'CLIENTS'){
    link = 'client-edit';
    props.clients.sort((a,b) => {
      return (a.data.name > b.data.name) ? 1 : ((b.data.name > a.data.name) ? -1 : 0);
    }); 
    content = props.clients.map(client => {
      return <SingleClient data={client}/>;
    });   
  } else {
    content = <SiteInfo />
    text = 'EDIT'
  }

  return (
    <div styleName={'container'}>
      <div styleName={'title-box'}>
        <h1 styleName={'title'}>{props.type}</h1>
        <div styleName={'button-box'} style={style}>
          <Link to={`/admin/${link}`}><RaisedButton label={text} secondary={true} fullWidth={true} /></Link>
        </div>
      </div>
      <div styleName={'client-box'}>
        {content}
      </div>
    </div>
  );
}
