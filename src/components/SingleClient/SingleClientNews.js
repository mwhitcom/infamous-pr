import React from 'react';

import './SingleClientNews.css';

export default function SingleClientNews(props) {
  const story = props.story.data;
  const style = {
    backgroundImage: `url(${story.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')})`
  };
  return (
    <div styleName={'story-container'}>
      <a href={story.news_link.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')} target="_blank">
        <div styleName={'image-container'} style={style} />
      </a>
      <a href={story.news_link.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')} target="_blank">
        <ul styleName={'content-list'}>
          <li styleName={'date'}>{story.date} - {story.outlet}</li>
          <li styleName={'title'}>{story.title.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')}</li>
        </ul>
      </a>
    </div>
  );
}
