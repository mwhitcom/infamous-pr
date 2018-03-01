import React, { Component } from 'react';
import { LinearProgress } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/index.js';

import './News.css';
import Navbar from '../Navigation/Navbar';
import NewsGrid from './NewsGrid';

class News extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.fetch_all_news();
  }

  handleLoading = () => {
    if(this.props.all_news){
      console.log(this.props.all_news.data)
      return (
        <NewsGrid stories={this.props.all_news.data} />
      );
    } else {
      return (
        <div>
          <LinearProgress mode="indeterminate" />
        </div>
      );
    }
  }
  
  render() {
    return (
      <div styleName={'news-container'}>
        <div styleName={'content-block'}>
          <Navbar />
          {this.handleLoading()}
        </div>
      </div>
    );
  }
}

function map_state_to_props(state, ownProps){
  return {
     all_news: state.clientReducer.all_news
  }
}

function map_dispatch_to_props(dispatch){
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(map_state_to_props, map_dispatch_to_props)(News);
