import React from 'react';

import './ImageBlock.css';
import ClientLinks from './ClientLinks';

export default function ImageBlock(props) {
  return (
    <div styleName={'container'}>
      <div styleName={'image-container'}>
        <img styleName={'image'} src={props.client[0].image} alt={props.client[0].name} />
      </div>
      <div styleName={'link-block'}>
        <ClientLinks />
      </div>
    </div>
  );
}
