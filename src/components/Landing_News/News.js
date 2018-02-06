import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/index.js';

import './News.css';
import FILLER from '../../utils/FillerData';
import FooterBlock from './FooterBlock';
import NewsGrid from './NewsGrid';

class News extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.actions.fetch_dynamic_info();
    this.props.actions.fetch_all_news();
  }
  render() {
    return (
      <div styleName={'news-container'}>
        <div styleName={'news-title'}>
          NEWS
        </div>
        <div styleName={'content-block'}>
          <NewsGrid stories={FILLER.stories} />
          <FooterBlock />
        </div>
      </div>
    );
  }
}

function map_state_to_props(state, ownProps){
  console.log(state.clientReducer.all_news);
  return {
     all_news: state.clientReducer.all_news,
     dynamic_info: state.clientReducer.dynamic_info
  }
}

function map_dispatch_to_props(dispatch){
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(map_state_to_props, map_dispatch_to_props)(News)
