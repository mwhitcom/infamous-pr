import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
import moment from 'moment';

import './NewsGrid.css'
import SingleStory from './SingleStory';

class NewsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: 0
    }
  }

  renderStories = () => {
    const { stories } = this.props;
    stories.sort ((a, b) => {
      return moment(a.data.date, 'MMMM DD, YYYY').toDate() - moment(b.data.date, 'MMMM DD, YYYY').toDate();
    });
    return stories.reverse().map(story => {
      return <SingleStory data={story} />;
    }); 
  }

  render() {
    return (
      <div styleName={'container'}>
        <div styleName={'title-box'}>
          <h1 styleName={'title'}>NEWS</h1>
          <div styleName={'button-box'}>
            <Link to={'/admin/news-edit'}><RaisedButton label={'CREATE NEW'} secondary={true} fullWidth={true} /></Link>
          </div>
        </div>
        <div styleName={'client-box'}>
          {this.renderStories()}
        </div>
      </div>
    );
  }
}

export default NewsGrid;
