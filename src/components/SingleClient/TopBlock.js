import React from 'react';

import './TopBlock.css';

export default function TopBlock(props) {
  const image = props.data ? props.data.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F') : '';

  return (
    <div styleName={'image-container'} >
      <h1 styleName={'client-title'}>{props.data.name}</h1>
      <img src={image} alt={props.data.name}/>
    </div>
  );
}
