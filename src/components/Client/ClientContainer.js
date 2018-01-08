import React from 'react';

import './ClientContainer.css';
import SingleClient from './SingleClient';

export default function ClientContainer(props) {
  const clients = props.list.map(client => <SingleClient name={client.name} image={client.image} />);
  return (
    <div styleName={'container'}>
      <h1 styleName={'title'}>{props.type}</h1>
      <div styleName={'client-grid'}>
        {clients}
      </div>
    </div>
  );
}

