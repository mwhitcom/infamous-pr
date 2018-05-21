import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { fetchNews } from '../../actions/newsActions'
import { fetchClient } from '../../actions/clientActions'
import { fetchInfo } from '../../actions/infoActions'

import './admin.css'
import NewsGrid from './newsGrid/NewsGrid'
import ClientGrid from './clientGrid/ClientGrid'
import InfoGrid from './infoGrid/InfoGrid'

class Admin extends Component {
  componentDidMount () {
    const {
      push, fetchNews, fetchClient, fetchInfo
    } = this.props
    const token = sessionStorage.getItem('token')
    !token && push('/login')
    window.scrollTo(0, 0)
    fetchNews()
    fetchClient()
    fetchInfo()
  }

  render () {
    const { news, clients, info } = this.props
    return (
      <div styleName="container">
        <Tabs>
          <Tab label="News">
            <NewsGrid news={news} />
          </Tab>
          <Tab label="Clients">
            <ClientGrid clients={clients} />
          </Tab>
          <Tab label="Site Info">
            <InfoGrid info={info} />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news,
  clients: state.clients,
  info: state.info.data
})

const mapDispatchToProps = {
  fetchNews,
  fetchClient,
  fetchInfo,
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
