import React, { Component } from 'react';
import { connect } from 'react-redux';

import SingleStory from '../Landing_News/SingleStory';

class ClientNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news_stories: []
    };
  }

  componentWillReceiveProps(ownProps) {
    console.log(ownProps);
    this.setState(ownProps);
  }

  render() {
    const list = this.state.news_stories.map(story => { 
      if (story.tags === 'Pete Tong') {
        return <SingleStory story={story} />;
      }
      return null;
    });    
    return (
      <div className="client-news-container">
        {list}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('mapping state to props');
  console.log(state);
  return {
      news_stories: state.landing_page_reducer.news_stories
  };
}

export default connect(mapStateToProps, null)(ClientNews);

