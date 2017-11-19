import React, { Component } from 'react';

import SingleStory from './SingleStory';
import Footer from '../Navigation/Footer';
import Navbar from '../Navigation/Navbar';

class NewsGrid extends Component {
  render() {
    return (
      <div className="news-grid-container">
        <div className="nav-blocker">
          <Navbar />
        </div>
        <div className="news-grid">
          <SingleStory landing={'true'} />
          <SingleStory landing={'true'} />
          <SingleStory landing={'true'} />
          <SingleStory landing={'true'} />
          <SingleStory landing={'true'} />
          <SingleStory landing={'true'} />
          <SingleStory landing={'true'} />
          <SingleStory landing={'true'} />
          <SingleStory landing={'true'} />
          <SingleStory landing={'true'} />
          <SingleStory landing={'true'} />
          <SingleStory landing={'true'} />
          <SingleStory landing={'true'} />
          <SingleStory landing={'true'} />
          <SingleStory landing={'true'} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default NewsGrid;
