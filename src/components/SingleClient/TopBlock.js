import React from 'react';

import './TopBlock.css';

export default function TopBlock(props) {
  const style = {
    backgroundImage: `url(${props.data.image})`
  }

  return (
    <div styleName={'image-container'} style={style}></div>
  );
}
