import React, { Component } from 'react';
import moment from 'moment';

import './NewsGrid.css';
import SingleStory from './SingleStory';
import PageControl from '../Navigation/PageControl';

class NewsGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      pages: [],
      livePages: [],
      limit: this.props.type === 'landing' ? 6 : 15,
      max: 0,
      loaded: false
    }
  }

  renderStory = () => {
    const { stories } = this.props;
    const { page, limit, loaded } = this.state;

    stories.sort ((a, b) => {
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

    return pagination.map((story, index) => <SingleStory story={story.data} key={index}/>);
  }

  pageUp = () => {
    const height = window.innerHeight
    const scrollOptions = {
      top: this.props.type === 'landing' ? height : 0,
      left: 0,
      behavior: 'smooth'
    }
    window.scrollTo(scrollOptions)
    const page = this.state.page + 1;
    const livePages = page === 2 ? [1,2,3] : this.state.livePages.map(page => page + 1);
    if (this.state.page === this.state.max) {
      return;
    } 
    this.setState({ page, livePages });
  }

  pageDown = () => {
    const height = window.innerHeight
    const scrollOptions = {
      top: this.props.type === 'landing' ? height : 0,
      left: 0,
      behavior: 'smooth'
    }
    window.scrollTo(scrollOptions)
    const page = this.state.page - 1
    const livePages = page === 1 ? [1,2,3] : this.state.livePages.map(page => page - 1);
    if (this.state.page === 1) {
      return;
    } 
    this.setState({ page, livePages });
  }

  handleOnePage = (event) => {
    const height = window.innerHeight
    const scrollOptions = {
      top: this.props.type === 'landing' ? height : 0,
      left: 0,
      behavior: 'smooth'
    }
    window.scrollTo(scrollOptions)    
    const page = parseInt(event.target.id, 10)
    const livePages = page === 1 ? [1,2,3] : [page - 1, page, page + 1]
    this.setState({ page, livePages });
  }

  render() {
    const { page, livePages, max } = this.state;

    return (
      <div styleName={'container'}>
        {this.renderStory()}
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
