import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import FILLER from '../../utils/FillerData';

class SingleStory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      story: {
        height: this.props.landing ? '350px' : '250px',
        float: this.props.landing ? 'left' : 'none'
      },
      link: {
        display: this.props.landing ? 'static' : 'none'
      },
      title: {
        fontSize: this.props.landing ? '20px' : '16px'
      },
      outlet_logo: {
        height: this.props.landing ? '20%' : '30%'
      }
    };
  
    return (
      <div className="news-story" style={style.story}>
        <a className="story-link-tag" href={this.props.story.news_link} target='_blank' rel='noopener noreferrer'>
          <div className="image-container">
            <img className="news-image" src={this.props.story.image_url} alt="News" />
          </div>
          <div className="news-info">
            <img className="outlet-logo" style={style.outlet_logo} src={this.props.story.outlet_logo} alt="Outlet Logo" />
            <div className="news-text-container">
              <h1 className="news-title" style={style.title}>{this.props.story.title}</h1>
              <p className="news-dek">{this.props.story.news_dek}</p>
            </div>
            <p className="news-tag" style={style.link} >Tags: <span>
              <Link className="tag-link" to="/client/pete-tong">{this.props.story.tags}</Link>
            </span></p>
          </div>
        </a>
      </div>
    );
  }
}

export default SingleStory;
