import React from 'react';

import './TopBlock.css';

export default function TopBlock(props) {
  const style = {
    backgroundImage: `url(${props.data.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')})`
  }

  return (
    <div styleName={'image-container'} style={style}></div>
  );
}
