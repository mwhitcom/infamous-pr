import React, { Component } from 'react';
<<<<<<< HEAD
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions/index'
=======

>>>>>>> ce2299a072be086d14015624bba59da7ddd51a2f
import './News.css';
import FILLER from '../../utils/FillerData';
import FooterBlock from './FooterBlock';
import NewsGrid from './NewsGrid';

class News extends Component {
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

<<<<<<< HEAD
function map_sate_to_props(state, ownProps){
  return {
     all_news: state.client_reducer.all_news,
     dynamic_info: state.client_reducer.dynamic_info
  }
}

function map_dispatch_to_props(dispatch){
  return { action: bindActionCreators(actions, dispatch)}
}

export default connect(map_sate_to_props, map_dispatch_to_props)(News)

=======
export default News;
>>>>>>> ce2299a072be086d14015624bba59da7ddd51a2f
