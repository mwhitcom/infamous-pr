import React, { Component } from 'react';
import { LinearProgress } from 'material-ui';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchNews } from '../../actions/newsActions';

import './News.css';
import Navbar from '../Navigation/Navbar';
import NewsGrid from './NewsGrid';

class News extends Component {
  componentWillMount() {
    const { news, fetchNews } = this.props;
    !news.length && fetchNews()
  }
  
  render() {
    const { news } = this.props;
    const newsContent = () => {
      if (!news || Object.keys(news).length === 0){
        return <div><LinearProgress mode="indeterminate" /></div>
      } else {
        return <NewsGrid stories={news} />
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

const mapStateToProps = state => ({
  news: state.news
})

const mapDispatchToProps = {
  fetchNews
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
