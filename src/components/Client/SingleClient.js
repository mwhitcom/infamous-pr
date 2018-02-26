import React from 'react';
import { Link } from 'react-router-dom';

import './SingleClient.css';

export default function SingleClient(props) {
  return (
    <Link styleName={'container'} to={`/client#${props.name.replace(' ', '-')}`}>
      <div styleName={'image-container'}>
        <img styleName={'image'}src={props.image} alt={props.name} />
      </div>
      <h2 styleName={'title'}>{props.name}</h2>
    </Link>
  );
}
