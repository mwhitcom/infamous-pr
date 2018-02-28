import React from 'react';

import './SingleStory.css';

export default function SingleStory(props) {
  const style = {
    backgroundImage: `url(${props.story.image_url})`
  }

  return (
    <a href={props.story.news_link} styleName={'story-container'} target="_blank">
      <div styleName={'image-container'} style={style} />
      <ul styleName={'content-list'}>
        <li styleName={'date'}>{props.story.date} - {props.story.outlet}</li>
        <li styleName={'title'}>{props.story.title}</li>
        <li styleName={'dek'}>{props.story.news_dek}</li>
      </ul>
    </a>
  );
}
