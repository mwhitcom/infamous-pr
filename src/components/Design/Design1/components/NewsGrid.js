import React, { Component } from 'react';

import './NewsGrid.css';
import NewsStory from './NewsStory';
import FILLER from '../../../../utils/FillerData';

class NewsGrid extends Component {
  render() {
    const newsList = FILLER.stories.map(story => <NewsStory story={story} />);    
    return (
      <div styleName={'container'}>
        <h1 styleName={'news-header'}>NEWS</h1>
        {newsList}
      </div>
    );
  }
}

export default NewsGrid;
