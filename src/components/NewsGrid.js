import React, { Component } from 'react';

import SingleStory from './SingleStory';

class NewsGrid extends Component {
  render() {
    return (
      <div className="news-grid-container">
        <div className="news-grid">
          <SingleStory />
          <SingleStory />
          <SingleStory />
          <SingleStory />
          <SingleStory />
          <SingleStory />
        </div>
      </div>
    );
  }
}

export default NewsGrid;
