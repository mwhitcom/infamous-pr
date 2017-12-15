import React, { Component } from 'react';

import './News.css';
import FILLER from '../../../utils/FillerData';
import FooterBlock from './FooterBlock';
import NewsGrid from './NewsGrid';

class News extends Component {
  render() {
    return (
      <div styleName={'news-container'}>
        <div styleName={'content-block'}>
          <NewsGrid stories={FILLER.stories} />
          <FooterBlock />
        </div>
      </div>
    );
  }
}

export default News;
