import React from 'react';

import './NewsStory.css';

export default function NewsStory(props) {
  return (
    <div styleName={'story-container'}>
      <div styleName={'image-container'}>
        <img styleName={'story-image'} src={props.story.image_url} alt={props.story.tags} />
      </div>
      <div styleName={'text-container'}>
        <ul styleName={'text-list'}>
          <li styleName={'date'}>{props.story.date} - {props.story.outlet}</li>
          <li styleName={'title'}>{props.story.title}</li>
          <li styleName={'dek'}>{props.story.news_dek}</li>
          <li styleName={'link'}><a href={props.story.news_link} target="_blank">Read more</a></li>
        </ul>
      </div>
    </div>
  );
}
