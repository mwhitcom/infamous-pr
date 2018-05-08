import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { LinearProgress } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as newsActionCreators from '../../actions/newsActions';

import './Landing.css';
import Video from './Video';
import Navbar from '../Navigation/Navbar';
import NewsGrid from '../News/NewsGrid';

class Landing extends Component {
  render() {
    const newsContent = () => {
      const { news } = this.props
      if (!news || Object.keys(news).length === 0){
        return <div><LinearProgress mode="indeterminate" /></div>
      } else {
        return <NewsGrid stories={news} type="landing"/>
      }
    }

    return (
      <div styleName={'container'}>
        <Helmet>
          <title>INFAMOUS</title>
        </Helmet>
        <div styleName={'logo-box'}>
          <img styleName={'image'} src="/assets/images/infamous_logo_black.png" alt="Infamous" />
        </div>
        <div styleName={'page-content'}>
          <Video />
          <Navbar type={'landing'} />
        </div>
        <div styleName={'news-section'}>
          <h1>NEWS</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
