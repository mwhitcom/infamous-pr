import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import moment from 'moment'

import { fetchSingleClient, clearSingleClient, fetchClientNews, clearClientNews } from '../../actions/clientActions'

import './clientPage.css'
import Navbar from '../Navigation/navbar/Navbar'
import SingleClientNews from './singleClientNews/SingleClientNews'
import TopBlock from './topBlock/TopBlock'
import BioBlock from './bioBlock/BioBlock'
import SocialBlock from './socialBlock/SocialBlock'

class ClientPage extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
    const name = this.props.match.params.client
    const { fetchSingleClient, fetchClientNews } = this.props
    fetchSingleClient(name)
    fetchClientNews(name)
  }

  componentWillUnmount () {
    const { clearSingleClient, clearClientNews } = this.props
    clearSingleClient()
    clearClientNews()
  }

  render () {
    const { news, client } = this.props

    // return null if client is an empty object
    if (!Object.keys(client).length) {
      return null
    }

    news.sort((a, b) => moment(a.data.date, 'MMMM DD, YYYY').toDate() - moment(b.data.date, 'MMMM DD, YYYY').toDate())

    const storyList = news.reverse().map((story, index) => (
      <SingleClientNews story={story} key={story} />
    ))

    return (
      <div styleName="container">
        <Helmet>
          <title>{`INFAMOUS - ${this.props.match.params.client}`}</title>
        </Helmet>
        <div styleName="page-content">
          <Navbar />
          <div>
            <div>
              <div styleName="block">
                <TopBlock data={client.data} />
                <SocialBlock data={client.data} clientId={client.id} />
                <BioBlock text={client.data} />
              </div>
            </div>
            <div styleName="news-title">NEWS</div>
            <div styleName="story-block">
              {storyList}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.singleClientNews,
  client: state.singleClient
})

const mapDispatchToProps = {
  fetchSingleClient,
  clearSingleClient,
  fetchClientNews,
  clearClientNews
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientPage)
