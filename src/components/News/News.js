import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchNews } from '../../actions/newsActions'

import './news.css'
import Navbar from '../Navigation/navbar/Navbar'
import NewsGrid from './newsGrid/NewsGrid'

class News extends Component {
  componentDidMount () {
    const { news, fetchNews } = this.props
    !news.length && fetchNews()
  }

  render () {
    const { news } = this.props
    return (
      <div styleName="news-container">
        <Helmet>
          <title>INFAMOUS - News</title>
        </Helmet>
        <div styleName="content-block">
          <Navbar />
          <NewsGrid news={news} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news
})

const mapDispatchToProps = {
  fetchNews
}

export default connect(mapStateToProps, mapDispatchToProps)(News)
