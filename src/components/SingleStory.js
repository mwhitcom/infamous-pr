import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleStory extends Component {
  render() {
    return (
      <div className="news-story">
        <div className="image-container">
          <img className="news-image" src="http://electricsloth.com/wp-content/uploads/2015/08/Hard-Summer-1.jpg" alt="News Image" />
        </div>
        <div className="news-info">
          <img className="outlet-logo" src="http://static3.businessinsider.com/image/5101498d69bedd4a15000003-547-162/screen%20shot%202013-01-24%20at%209.47.23%20am.png" />
          <div className="news-text-container">
            <h1 className="news-title">Hard Summer is Cool</h1>
            <p className="news-dek">Lots of cool people came out, Hard summer is pretty damn fun bro</p>
          </div>
          <Link className="news-tag" to="#">Hard Summer</Link>
        </div>
      </div>
    );
  }
}

export default SingleStory;
