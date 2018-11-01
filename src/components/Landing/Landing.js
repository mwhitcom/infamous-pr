import R from 'ramda';
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { fetchNews } from '../../actions/newsActions'
import { fetchClient } from '../../actions/clientActions'
import { fetchInfo } from '../../actions/infoActions'

import './landing.css'
import Video from './video/Video'
import Navbar from '../Navigation/navbar/Navbar'
import NewsGrid from '../News/newsGrid/NewsGrid'

class Landing extends Component {
  componentDidMount () {
    const { fetchNews, fetchClient, fetchInfo } = this.props
    fetchNews()
    fetchClient()
    fetchInfo()
  }

  render () {
    const { news, info } = this.props
    return (
      <div styleName="container">
        <Helmet>
          <title>INFAMOUS</title>
        </Helmet>
        <div styleName="logo-box">
          <img styleName="image" src="/assets/images/infamous_logo_black.png" alt="Infamous" />
        </div>
        <div styleName="page-content">
          <Video />
          <Navbar type="landing" address={info} />
        </div>
        <div styleName="news-section">
          <h1>NEWS</h1>
          <NewsGrid news={news} type="landing" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news,
  info: state.info.data,
})

const mapDispatchToProps = {
  fetchNews,
  fetchClient,
  fetchInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
