import React from 'react';
import { Paper, RaisedButton } from 'material-ui';

import './DataGrid.css';
<<<<<<< HEAD

export default function DataGrid(props) {
=======
import SingleNews from './SingleNews';
import SingleClient from './SingleClient';

export default function DataGrid(props) {
  const Button = props.type !== 'SITE INFO' ? <RaisedButton styleName={'button'} label="Create" secondary={true} /> : '';
  const NewsList = props.type === 'NEWS' ? props.stories.map(story => <SingleNews data={story} />) : '';
  const ClientsList = props.type === 'CLIENTS' ? props.clients.map(client => <SingleClient data={client} />) : '';
  const ClientBox = props.type === 'CLIENTS' ? <div styleName={'client-box'}>{ClientsList}</div> : '';
>>>>>>> ce2299a072be086d14015624bba59da7ddd51a2f
  return (
    <div styleName={'container'}>
      <ul styleName={'title-box'}>
        <li>{props.type}</li>
        <li>
<<<<<<< HEAD
          <RaisedButton styleName={'button'} label="Create" secondary={true} />
        </li>
      </ul>
      <Paper styleName={'box'} zDepth={3} />
=======
          {Button}
        </li>
      </ul>
      <Paper styleName={'box'} zDepth={1}>
        {NewsList}
        {ClientBox}          
      </Paper>
>>>>>>> ce2299a072be086d14015624bba59da7ddd51a2f
    </div>
  );
}
