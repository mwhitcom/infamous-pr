import React, { Component } from 'react';

import SingleStory from './SingleStory';
import Footer from '../Navigation/Footer';
import Navbar from '../Navigation/Navbar';

class NewsGrid extends Component {
  constructor(props){
    super(props)
    this.state={
      news_stories: []
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({news_stories: nextProps.news_stories})
  }
  render() {
    if(this.state.news_stories != undefined){
      let list = this.state.news_stories.map(story=> <SingleStory story={story}/>)
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
