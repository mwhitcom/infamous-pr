import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchNews } from '../../actions/newsActions'
import { fetchClient } from '../../actions/clientActions'

import './clients.css'
import Navbar from '../Navigation/navbar/Navbar'
import ClientContainer from './clientContainer/ClientContainer'

const types = ['artists', 'labels', 'festivals & events', 'brands', 'technology', 'film & tv']

class Clients extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filter: 'all'
    }
  }

  componentDidMount () {
    const {
      fetchNews, fetchClient, news, clients
    } = this.props
    !news.length && fetchNews()
    !clients.length && fetchClient()
  }

  handleUpdate = (type) => {
    const { clients } = this.props
    return clients.filter(client => client.data.type.replace(/~/g, '&').toUpperCase() === type.toUpperCase())
  }

  handleClick = (event) => {
    this.setState({ filter: event.target.id })
  }

  style = filter => ({
    textDecorationLine: this.state.filter === filter ? 'underline' : 'none',
    color: this.state.filter === filter ? '#000' : '#aaaaaa'
  })

  render () {
    const sections = types.map((type, index) => {
      const style = this.state.filter === 'all'
        ? {}
        : this.state.filter.toUpperCase() === type.toUpperCase()
          ? {}
          : { display: 'none' }
      return (
        <ClientContainer
          type={type.toUpperCase()}
          style={style}
          list={this.handleUpdate(type.toUpperCase())}
          key={type}
        />
      )
    })

    const nav = types.map((type, index) => (
      <li
        styleName="item"
        id={type}
        style={this.style(type)}
        onClick={this.handleClick}
        key={type}
      >
        {type.toUpperCase()}
      </li>))

    return (
      <div styleName="container">
        <Helmet>
          <title>INFAMOUS - Clients</title>
        </Helmet>
        <div styleName="content">
          {console.log(this.props.clients)}
          {/* {this.props.clients && this.props.clients && this.state.clients.forEach((element) => {
            console.log(element.data.name, element.data.active)
          })} */}
          <Navbar />
          <div styleName="grid-container">
            <ul styleName="nav-list">
              <li styleName="sort">SORT:</li>
              <li styleName="item" id="all" style={this.style('all')} onClick={this.handleClick}>ALL</li>
              {nav}
            </ul>
            {sections}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news,
  clients: state.clients
})

const mapDispatchToProps = {
  fetchNews,
  fetchClient
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients)
