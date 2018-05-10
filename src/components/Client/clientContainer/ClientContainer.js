import React from 'react';

import './clientContainer.css';
import SingleClient from '../singleClient/SingleClient';

const ClientContainer = (props) => {
  props.list.sort((a,b) => {
    return (a.data.name > b.data.name) ? 1 : ((b.data.name > a.data.name) ? -1 : 0);
  }); 
  const filtered = props.list.filter(client => client.data.active.toUpperCase() === 'ACTIVE');
  const clients = filtered.map(client => {
    return (
      <SingleClient 
        name={client.data.name} 
        idData={client.id} 
        image={client.data.image} 
        key={client.data.name} 
      />
    );
  });

  return (
    <div style={props.style} styleName="container">
      <h1 styleName="title">{props.type}</h1>
      <div styleName="client-grid">
        {clients}
      </div>
    </div>
  );
}

export default ClientContainer;
