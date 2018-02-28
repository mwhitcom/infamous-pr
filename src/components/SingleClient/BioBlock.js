import React from 'react';

import './BioBlock.css';

export default function BioBlock(props) {
  return (
    <div styleName={'container'}>
      <p styleName={'para-text'}>{props.text}</p>
    </div>
  );
}
