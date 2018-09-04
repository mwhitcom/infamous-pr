import React, { Component } from 'react';
import moment from 'moment';

import './newsGrid.css';
import SingleStory from '../singleStory/SingleStory';
import PageControl from '../../Navigation/pageControl/PageControl';

class NewsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pages: [],
      livePages: [],
      limit: this.props.type ? 6 : 15,
      max: 0,
      loaded: false,
      scrollOptions: {
        top: 0,
        left: 0,
        behavior: 'smooth',
      },
    };
  }

  componentDidMount() {
    const top = this.props.type ? window.innerHeight : 0;
    this.setState({ scrollOptions: { ...this.state.scrollOptions, top } });
  }

  pageUp = () => {
    window.scrollTo(this.state.scrollOptions);
    const page = this.state.page + 1;
    const livePages =
      page === 2 ? [1, 2, 3] : this.state.livePages.map(page => page + 1);
    if (this.state.page === this.state.max) {
      return;
    }
    this.setState({ page, livePages });
  };

  pageDown = () => {
    window.scrollTo(this.state.scrollOptions);
    const page = this.state.page - 1;
    const livePages =
      page === 1 ? [1, 2, 3] : this.state.livePages.map(page => page - 1);
    if (this.state.page === 1) {
      return;
    }
    this.setState({ page, livePages });
  };

  handleOnePage = event => {
    window.scrollTo(this.state.scrollOptions);
    const page = parseInt(event.target.id, 10);
    const livePages = page === 1 ? [1, 2, 3] : [page - 1, page, page + 1];
    this.setState({ page, livePages });
  };

  renderStory = () => {
    const { news } = this.props;
    const { page, limit, loaded } = this.state;

    news.sort(
      (a, b) =>
        moment(a.data.date, 'MMMM DD, YYYY').toDate() -
        moment(b.data.date, 'MMMM DD, YYYY').toDate(),
    );

    const secondLimit = page * limit;
    const firstLimit = secondLimit - limit;
    const pagination = news.reverse().slice(firstLimit, secondLimit);

    if (!loaded && news.length !== 0) {
      const max = Math.ceil(news.length / limit);
      const pages = new Array(max);
      const pageArray = pages.fill('').map((page, index) => index + 1);
      this.setState({
        pages: pageArray,
        livePages: pageArray.slice(0, 3),
        max,
        loaded: true,
      });
    }

    return pagination.map((story, index) => (
      <SingleStory story={story.data} key={story.data} />
    ));
  };

  render() {
    const { page, livePages, max } = this.state;

    return (
      <div styleName="container">
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
