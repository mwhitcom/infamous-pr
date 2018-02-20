import React from 'react';

import './TopBlock.css';

export default function TopBlock(props) {
  return (
    <div styleName={'container'}>
      <div styleName={'image-container'}>
        <img styleName={'image'} src={props.data.image}/>
      </div>
    </div>
  );
}
