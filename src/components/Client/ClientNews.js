import React, { Component } from 'react';

import SingleStory from '../Landing_News/SingleStory';

class ClientNews extends Component {
  render() {
    return (
      <div className="client-news-container">
        <SingleStory />
        <SingleStory />
        <SingleStory />
        <SingleStory />
        <SingleStory />
        <SingleStory />
      </div>
    );
  }
}

export default ClientNews;
