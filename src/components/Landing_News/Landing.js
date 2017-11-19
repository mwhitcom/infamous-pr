import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/index.js'

import NavbarLanding from '../Navigation/NavbarLanding';
import VideoBackground from './VideoBackground';
import NewsGrid from './NewsGrid';

class Landing extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    this.props.actions.fetch_news_stories()
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <NavbarLanding />
        <VideoBackground />
        <NewsGrid news_stories={this.props.news_stories}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
      news_stories: state.news_stories
  }
}
function mapDispatchToProps(dispatch){
  return {
      actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
