import React, { Component } from 'react';
import { LinearProgress } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import * as newsActionCreators from '../../actions/newsActions';

import './News.css';
import Navbar from '../Navigation/Navbar';
import NewsGrid from './NewsGrid';

class News extends Component {
  componentWillMount() {
    const { news, newsActions } = this.props;
    !news ? newsActions.fetchAllNews() : '';
  }
  
  render() {
    const { news } = this.props;
    const newsContent = () => {
      if(Object.keys(news) !== 0){
        return(
          <NewsGrid stories={news} />
        );
      } else {
        <div><LinearProgress mode="indeterminate" /></div>
      }
    }

    return (
      <div styleName={'news-container'}>
        <Helmet>
          <title>INFAMOUS - News</title>
        </Helmet>
        <div styleName={'content-block'}>
          <Navbar />
          {newsContent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news
  };
};

const mapDispatchToProps = dispatch => ({
  newsActions: bindActionCreators(newsActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
