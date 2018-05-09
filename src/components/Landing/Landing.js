import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { fetchNews } from '../../actions/newsActions';
import { fetchClient } from '../../actions/clientActions';
import { fetchInfo } from '../../actions/infoActions';

import './Landing.css';
import Video from './Video';
import Navbar from '../Navigation/Navbar';
import NewsGrid from '../News/NewsGrid';

class Landing extends Component {
  componentDidMount() {
    const { fetchNews, fetchClient, fetchInfo } = this.props
    fetchNews()
    fetchClient()
    fetchInfo()
  }

  render() {
    const { news } = this.props
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
          <NewsGrid stories={news} type="landing"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news
})

const mapDispatchToProps = {
  fetchNews,
  fetchClient,
  fetchInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

