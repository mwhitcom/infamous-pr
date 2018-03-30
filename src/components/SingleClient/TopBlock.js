import React from 'react';

import './TopBlock.css';

export default function TopBlock(props) {
  const image = props.data ? props.data.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F') : '';
  const style = {
    backgroundImage: `url(${image})`
  }

  return (
    <div styleName={'image-container'}>
      <img src={image} />
    </div>
  );
}
