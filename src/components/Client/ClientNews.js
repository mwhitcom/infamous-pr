import React, { Component } from 'react';

import SingleStory from '../Landing_News/SingleStory';

class ClientNews extends Component {
  render() {
    const story = {
      image_url: 'http://electricsloth.com/wp-content/uploads/2015/08/Hard-Summer-1.jpg',
      title: 'Hard Summer is Cool'
    };

    return (
      <div className="client-news-container">
        <SingleStory story={story} />
        <SingleStory story={story} />
        <SingleStory story={story} />
        <SingleStory story={story} />
        <SingleStory story={story} />
        <SingleStory story={story} />
      </div>
    );
  }
}

export default ClientNews;
