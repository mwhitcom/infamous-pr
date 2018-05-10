import React from 'react';

import './singleClientNews.css';

const SingleClientNews = (props) => {
  const { data } = props.story;
  const style = {
    backgroundImage: `url(${data.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')})`
  };
  
  return (
    <div styleName="story-container">
      <a href={data.news_link.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')} target="_blank">
        <div styleName="image-container" style={style} />
      </a>
      <a href={data.news_link.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')} target="_blank">
        <ul styleName="content-list">
          <li styleName="date">{data.date} - {data.outlet}</li>
          <li styleName="title">{data.title.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')}</li>
        </ul>
      </a>
    </div>
  );
}

export default SingleClientNews;
