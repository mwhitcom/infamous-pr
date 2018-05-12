import React from 'react';

import './socialBlock.css';

const SocialBlock = (props) => {
  const types = ['facebook', 'twitter', 'instagram', 'youtube', 'soundcloud', 'website', 'press kit']
  const links = types.map((type, index) => {
    const { data, clientId } = props
    let link = data[type] ? data[type] : `/client#${clientId}`;
    if(type === 'press kit'){
      link = data ? data.pressKit : `/client#${clientId}`;
    }
    return (
      <li key={index}>
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
