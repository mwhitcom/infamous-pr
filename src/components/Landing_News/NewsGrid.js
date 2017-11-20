import React, { Component } from 'react';
import { connect } from 'react-redux'
import SingleStory from './SingleStory';
import Footer from '../Navigation/Footer';
import Navbar from '../Navigation/Navbar';

class NewsGrid extends Component {
    constructor(props){
    super(props)
    this.state={
      news_stories:[]
    }
  }
  componentWillReceiveProps(ownProps){
    console.log(ownProps)
    this.setState(ownProps)
  }
  render() {
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
}

function mapStateToProps(state, ownProps){
  console.log('mapping state to props')
  console.log(state)
  return {
      news_stories: state.landing_page_reducer.news_stories
  }
}

export default connect(mapStateToProps, null)(NewsGrid);
