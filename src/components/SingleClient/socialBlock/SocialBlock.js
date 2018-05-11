import React from 'react';

import './socialBlock.css';

const SocialBlock = (props) => {
  const types = ['facebook', 'twitter', 'instagram', 'youtube', 'soundcloud', 'website', 'press kit']
  const links = types.map((type, i) => {
    const { data, clientId } = props
    let link = data[type]
      ? data[type].replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')
      : `/client#${clientId}`;
    if(type === 'press kit'){
      link = data
        ? data.pressKit.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')
        : `/client#${clientId}`;
    }
    return (
      <li key={i}>
        <a href={link} target="_blank">{type.toUpperCase()}</a>
      </li>
    )
  })

  return (
    <ul styleName="container">
      {links}
    </ul>
  );
}

export default SocialBlock;
