import React from 'react';
import { Paper, RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

import './DataGrid.css';
import SingleNews from './SingleNews';
import SingleClient from './SingleClient';

export default function DataGrid(props) {
  const newsButton = props.type === 'NEWS' ? <Link to="/admin/news-edit"><RaisedButton styleName={'button'} label="Create" secondary={true} /></Link> : '';
  const clientButton = props.type === 'CLIENTS' ? <Link to="/admin/client-edit"><RaisedButton styleName={'button'} label="Create" secondary={true} /></Link> : '';
  const NewsList = props.type === 'NEWS' ? props.stories.map(story => <SingleNews data={story} />) : '';
  const ClientsList = props.type === 'CLIENTS' ? props.clients.map(client => <SingleClient data={client} />) : '';
  const ClientBox = props.type === 'CLIENTS' ? <div styleName={'client-box'}>{ClientsList}</div> : '';
  return (
    <div styleName={'container'}>
      <ul styleName={'title-box'}>
        <li>{props.type}</li>
        <li>
          {newsButton}
          {clientButton}
        </li>
      </ul>
      <Paper styleName={'box'} zDepth={1}>
        {NewsList}
        {ClientBox}          
      </Paper>
    </div>
  );
}
