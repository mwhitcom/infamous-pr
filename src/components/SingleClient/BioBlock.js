import React from 'react';

import './BioBlock.css';

export default function BioBlock(props) {
  const text = props.text.bio
    .replace(/@/g, '&')
    .split('~')
    .filter(item => item !== '')
    .map((para, index) => <p styleName={'para-text'} key={index}>{para}</p>);

  return (
    <div styleName={'container'}>
      {text}
    </div>
  );
}
