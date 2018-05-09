import React from 'react';

import './ClientContainer.css';
import SingleClient from './SingleClient';

export default function ClientContainer(props) {
  props.list.sort((a,b) => {
    return (a.data.name > b.data.name) ? 1 : ((b.data.name > a.data.name) ? -1 : 0);
  }); 
  const filtered = props.list.filter(client => client.data.active === 'Active');
  const clients = filtered.map(client => <SingleClient name={client.data.name} idData={client.id} image={client.data.image} key={client.data.name} />);
  return (
    <div style={props.style} styleName={'container'}>
      <h1 styleName={'title'}>{props.type}</h1>
      <div styleName={'client-grid'}>
        {clients}
      </div>
    </div>
  );
}

