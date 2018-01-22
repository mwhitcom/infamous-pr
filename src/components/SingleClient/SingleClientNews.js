import React from 'react';

import './SingleClientNews.css';

export default function SingleClientNews(props) {
  return (
    <div styleName={'story-container'}>
      <div styleName={'image-container'}>
        <a href={props.story.news_link} target="_blank">
          <img src={props.story.image_url} alt="news image" />
        </a>
      </div>
      <a href={props.story.news_link} target="_blank">
        <ul styleName={'content-list'}>
          <li styleName={'date'}>{props.story.date} - {props.story.outlet}</li>
          <li styleName={'title'}>{props.story.title}</li>
        </ul>
      </a>
    </div>
  );
}
