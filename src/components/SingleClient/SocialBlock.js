import React from 'react';

import './SocialBlock.css';

export default function SocialBlock(props) {
  const pressLink = props.data
    ? props.data.pressKit.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')
    : '#';
  const facebookLink = props.data.facebook
    ? props.data.facebook.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')
    : '#';
  const twitterLink = props.data.twitter
    ? props.data.twitter.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')
    : '#';
  const instagramLink = props.data.instagram
    ? props.data.instagram.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')
    : '#';
  const youtubeLink = props.data.youtube
    ? props.data.youtube.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')
    : '#';
  const soundcloudLink = props.data.soundcloud
    ? props.data.soundcloud.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')
    : '#';
  const websiteLink = props.data.website
    ? props.data.website.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')
    : '#';
  
  return (
    <ul styleName={'container'}>
      <li><a href={facebookLink} target="_blank">FACEBOOK</a></li>
      <li><a href={twitterLink} target="_blank">TWITTER</a></li>
      <li><a href={instagramLink} target="_blank">INSTAGRAM</a></li>
      <li><a href={youtubeLink} target="_blank">YOUTUBE</a></li>
      <li><a href={soundcloudLink} target="_blank">SOUNDCLOUD</a></li>
      <li><a href={websiteLink} target="_blank">WEBSITE</a></li>
      <li><a href={pressLink} target="_blank">PRESS KIT</a></li>
    </ul>
  );
}
