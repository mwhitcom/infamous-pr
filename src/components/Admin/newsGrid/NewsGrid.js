import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { RaisedButton, TextField } from 'material-ui'
import moment from 'moment'

import './newsGrid.css'
import SingleStory from './singleStory/SingleStory'
import PageControl from '../../Navigation/pageControl/PageControl'

class NewsGrid extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 1,
      pages: [],
      livePages: [],
      limit: 10,
      max: 0,
      loaded: false,
      scrollOptions: {
        top: 0,
        left: 0,
        behavior: 'smooth'
      },
      search: ''
    }
  }

  handleSearch = (event) => {
    const { value } = event.target
    this.setState({ search: value })
  }

  pageUp = () => {
    window.scrollTo(this.state.scrollOptions)
    const page = this.state.page + 1
    const livePages = page === 2 ? [1, 2, 3] : this.state.livePages.map(page => page + 1)
    if (this.state.page === this.state.max) {
      return
    }
    this.setState({ page, livePages })
  }

  pageDown = () => {
    window.scrollTo(this.state.scrollOptions)
    const page = this.state.page - 1
    const livePages = page === 1 ? [1, 2, 3] : this.state.livePages.map(page => page - 1)
    if (this.state.page === 1) {
      return
    }
    this.setState({ page, livePages })
  }

  handleOnePage = (event) => {
    window.scrollTo(this.state.scrollOptions)
    const page = parseInt(event.target.id, 10)
    const livePages = page === 1 ? [1, 2, 3] : [page - 1, page, page + 1]
    this.setState({ page, livePages })
  }

  renderStories = () => {
    const { news } = this.props
    const { page, limit, loaded } = this.state

    news.sort((a, b) => moment(a.data.date, 'MMMM DD, YYYY').toDate() - moment(b.data.date, 'MMMM DD, YYYY').toDate())

    const secondLimit = page * limit
    const firstLimit = secondLimit - limit
    const pagination = news.reverse().slice(firstLimit, secondLimit)

    if (!loaded && news.length !== 0) {
      const max = Math.ceil(news.length / limit)
      const pages = new Array(max)
      const pageArray = pages.fill('').map((page, index) => index + 1)
      this.setState({
        pages: pageArray,
        livePages: pageArray.slice(0, 3),
        max,
        loaded: true
      })
    }
    return pagination.map((story, index) => <SingleStory news={story} key={story} />)
  }

  renderSearch = () => {
    const { news } = this.props
    const { search } = this.state
    const searched = news.filter((story) => {
      const { outlet, client } = story.data
      return outlet.toLowerCase().search(search.toLowerCase()) !== -1 ||
        client.toLowerCase().search(search.toLowerCase()) !== -1
    })
    return searched.map((story, index) => <SingleStory news={story} key={story} />)
  }

  render () {
    const { page, livePages, max } = this.state
    return (
      <div styleName="container">
        <div styleName="title-box">
          <h1 styleName="title">NEWS</h1>
          <div styleName="search-box">
            <TextField
              id="search"
              floatingLabelText="Search"
              value={this.state.search}
              onChange={this.handleSearch}
              fullWidth
            />
          </div>
          <div styleName="button-box">
            <Link to="/admin/news-edit">
              <RaisedButton label="CREATE NEW" secondary fullWidth />
            </Link>
          </div>
        </div>
        <div styleName="client-box">
          {this.state.search ? this.renderSearch() : this.renderStories()}
        </div>
        <PageControl
          pageUp={this.pageUp}
          pageDown={this.pageDown}
          handleOnePage={this.handleOnePage}
          pages={livePages}
          page={page}
          max={max}
        />
      </div>
    )
  }
}

export default NewsGrid
