import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton, TextField } from 'material-ui';
import moment from 'moment';

import './NewsGrid.css'
import SingleStory from './SingleStory';
import PageControl from '../Navigation/PageControl';

class NewsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pages: [],
      livePages: [],
      limit: 10,
      max: 0,
      loaded: false,
      search: ''
    }
  }

  renderStories = () => {
    const { stories } = this.props;
    const { page, limit, loaded } = this.state;

    stories.sort((a, b) => {
      return moment(a.data.date, 'MMMM DD, YYYY').toDate() - moment(b.data.date, 'MMMM DD, YYYY').toDate();
    });

    const second = page * limit;
    const first = second - limit;
    const pagination = stories.reverse().slice(first, second);

    if (!loaded && stories.length !== 0){
      const max = Math.ceil(stories.length / limit)
      const pages = new Array(max);
      const pageArray = pages.fill('').map((page, index) => index + 1);
      this.setState({
        pages: pageArray,
        livePages: pageArray.slice(0, 3),
        max,
        loaded: true,
      });
    }
    return pagination.map(story => <SingleStory data={story} />);
  }

  renderSearch = () => {
    const { stories } = this.props;
    const { search } = this.state;
    const searched = stories.filter(story => {
      const { outlet, client } = story.data;
      return outlet.toLowerCase().search(search.toLowerCase()) !== -1 
        || client.toLowerCase().search(search.toLowerCase()) !== -1;
    });
    return searched.map(story => <SingleStory data={story} />);
  }

  handleSearch = (event) => {
    const { value } = event.target
    this.setState({ search: value });
  }

  pageUp = () => {
    const page = this.state.page + 1;
    const livePages = page === 2 ? [1,2,3] : this.state.livePages.map(page => page + 1);
    if (this.state.page === this.state.max) {
      return;
    } 
    this.setState({ page, livePages });
  }

  pageDown = () => {
    const page = this.state.page - 1
    const livePages = page === 1 ? [1,2,3] : this.state.livePages.map(page => page - 1);
    if (this.state.page === 1) {
      return;
    } 
    this.setState({ page, livePages });
  }

  handleOnePage = (event) => {
    const page = parseInt(event.target.id, 10)
    const livePages = page === 1 ? [1,2,3] : [page - 1, page, page + 1]
    this.setState({ page, livePages });
  }

  render() {
    const { page, livePages, max } = this.state;
    return (
      <div styleName={'container'}>
        <div styleName={'title-box'}>
          <h1 styleName={'title'}>NEWS</h1>
          <div styleName={'search-box'}>
            <TextField
              id="search"
              floatingLabelText="Search"
              value={this.state.search}
              onChange={this.handleSearch}
              fullWidth={true}
            />
          </div>
          <div styleName={'button-box'}>
            <Link to={'/admin/news-edit'}><RaisedButton label={'CREATE NEW'} secondary={true} fullWidth={true} /></Link>
          </div>
        </div>
        <div styleName={'client-box'}>
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
    );
  }
}

export default NewsGrid;
