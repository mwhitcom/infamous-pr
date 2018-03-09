import React from 'react';

import './ClientContainer.css';
import SingleClient from './SingleClient';

export default function ClientContainer(props) {
  props.list.sort((a,b) => {
    return (a.data.name > b.data.name) ? 1 : ((b.data.name > a.data.name) ? -1 : 0);
  }); 
  const clients = props.list.map(client => <SingleClient name={client.data.name} idData={client.id} image={client.data.image} />);
  const title = props.type === 'TECH' ? props.type : `${props.type}S`;
  return (
    <div style={props.style} styleName={'container'}>
      <h1 styleName={'title'}>{title}</h1>
      <div styleName={'client-grid'}>
        {clients}
      </div>
    </div>
  );
}

