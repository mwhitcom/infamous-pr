import React from 'react';

import './SocialBlock.css';

export default function SocialBlock(props) {
  const pressLink = props.data.pressKit
    ? props.data.pressKit.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')
    : '#';
  
  return (
    <ul styleName={'container'}>
      <li><a href={props.data.facebook} target="_blank">FACEBOOK</a></li>
      <li><a href={props.data.twitter} target="_blank">TWITTER</a></li>
      <li><a href={props.data.instagram} target="_blank">INSTAGRAM</a></li>
      <li><a href={props.data.youtube} target="_blank">YOUTUBE</a></li>
      <li><a href={props.data.soundcloud} target="_blank">SOUNDCLOUD</a></li>
      <li><a href={props.data.website} target="_blank">WEBSITE</a></li>
      <li><a href={pressLink} target="_blank">PRESS KIT</a></li>
    </ul>
  );
}
