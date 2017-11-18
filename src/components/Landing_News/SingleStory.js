import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FILLER from '../../utils/FillerData';

class SingleStory extends Component {
  render() {
    const style = {
      story: {
        height: this.props.landing ? '350px' : '250px',
        float: this.props.landing ? 'left' : 'none'
      },
      link: {
        display: this.props.landing ? 'static' : 'none'
      }
    };
  
    return (
      <div className="news-story" style={style.story}>
        <div className="image-container">
          <img className="news-image" src={FILLER.news_image} alt="News" />
        </div>
        <div className="news-info">
          <img className="outlet-logo" src={FILLER.news_outlet_logo} alt="Outlet Logo" />
          <div className="news-text-container">
            <h1 className="news-title">{FILLER.news_title}</h1>
            <p className="news-dek">{FILLER.news_dek}</p>
          </div>
          <Link style={style.link} className="news-tag" to="#">{FILLER.news_tag}</Link>
        </div>
      </div>
    );
  }
}

export default SingleStory;
