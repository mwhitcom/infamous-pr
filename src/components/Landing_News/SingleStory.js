import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FILLER from '../../utils/FillerData';

class SingleStory extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="news-story">
        <div className="image-container">
          <img className="news-image" src={this.props.story.image_url} alt="News" />
        </div>
        <div className="news-info">
          <img className="outlet-logo" src={FILLER.news_outlet_logo} alt="Outlet Logo" />
          <div className="news-text-container">
            <h1 className="news-title">{this.props.story.title}</h1>
            <p className="news-dek">{FILLER.news_dek}</p>
          </div>
          <Link className="news-tag" to="#">{FILLER.news_tag}</Link>
        </div>
      </div>
    );
  }
}

export default SingleStory;
