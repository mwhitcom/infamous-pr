import React, { Component } from 'react';

import SingleStory from './SingleStory';
import Footer from '../Navigation/Footer';
import Navbar from '../Navigation/Navbar';

class NewsGrid extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let list = this.props.news_stories.map(story=> <SingleStory story={story}/>)
    if(list){
      return (
        <div className="news-grid-container">
          <div className="nav-blocker">
            <Navbar />
          </div>
          <div className="news-grid">
          {list}
          </div>
          <Footer />
        </div>
      );
    }
    else {
      return (
        <div className="news-grid-container">
          <div className="nav-blocker">
            <Navbar />
          </div>
          <div className="news-grid">
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default NewsGrid;
