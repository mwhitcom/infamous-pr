import React, {Component} from 'react';
import { Paper, FlatButton } from 'material-ui';
import { Link } from "react-router-dom";


import './SingleStory.css';

class SingleStory extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const news = this.props.data;
    return(
      <Paper styleName={'container'} zDepth={3}>
        <div styleName={'image-container'}>
          <img src={news.data.image_url} alt={news.data.title}/>
        </div>
        <div styleName={'text-container'}>
          <h3>{`${news.data.date} - ${news.data.outlet}`}</h3>
          <h1>{news.data.title}</h1>
          <h2>{news.data.news_dek}</h2>
        </div>
        <div styleName={'button-container'}>
          <Link to={`/admin/news-edit#${news.id}`}>
            <button id={news.id} onClick={this.handleClick}>EDIT</button>
          </Link>
          <button id={news.id} onClick={this.handleClick}>DELETE</button>
        </div>
      </Paper>
    );
  }
}

export default SingleStory;
