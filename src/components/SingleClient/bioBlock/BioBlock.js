import React from 'react';

import './bioBlock.css';

const BioBlock = (props) => {
  return (
    <div styleName="container">
      {props.text.bio
        .replace(/@/g, '&')
        .split('~')
        .filter(item => item !== '')
        .map((para, index) => <p styleName="para-text" key={index}>{para}</p>)
      }
    </div>
  );
}

export default BioBlock;
