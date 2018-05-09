import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { LinearProgress } from 'material-ui';
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

const mapStateToProps = state => ({
  news: state.news
})

const mapDispatchToProps = {
  fetchNews,
  fetchClient,
  fetchInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

