import React from 'react';

import './SingleStory.css';

export default function SingleStory(props) {
  return (
    <div styleName={'story-container'}>
      <div styleName={'image-container'}>
        <a href={props.story.news_link} target="_blank">
          <img src={props.story.image_url} alt="news image" />
        </a>
      </div>
      <ul styleName={'content-list'}>
        <li styleName={'date'}>{props.story.date} - {props.story.outlet}</li>
        <li styleName={'title'}>{props.story.title}</li>
        <li styleName={'dek'}>{props.story.news_dek}</li>
      </ul>
    </div>
  );
}
