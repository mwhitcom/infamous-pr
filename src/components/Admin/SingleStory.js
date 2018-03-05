import React, {Component} from 'react';
import { Paper, FlatButton, Dialog } from 'material-ui';
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/index.js';

import './SingleStory.css';

class SingleStory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleClick = () => {
    this.setState({open: true});
  }
  
  handleClose = () => {
    this.setState({open: false});
  }

  handleDeleteClick = () => {
    this.props.actions.delete_news_article(this.props.data.id);
    this.props.actions.fetch_all_news();
    this.setState({open: false});
  }

  render() {
    const news = this.props.data;
    const actions = [
      <FlatButton
        label="CANCEL"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="CONFIRM"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleDeleteClick}
      />,
    ];
    return(
      <Paper styleName={'container'} zDepth={3}>
        <Dialog
          title="Confirm Delete"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Are you sure you want to delete this news story?
        </Dialog>
        <div styleName={'image-container'}>
          <img src={news.data.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')} alt={news.data.title}/>
        </div>
        <div styleName={'text-container'}>
          <h3>{`${news.data.date} - ${news.data.outlet}`}</h3>
          <h1>{news.data.title}</h1>
          <h2>{news.data.news_dek}</h2>
        </div>
        <div styleName={'button-container'}>
          <Link to={`/admin/news-edit#${news.id}`}>
            <button id={news.id}>EDIT</button>
          </Link>
          <button id={news.id} onClick={this.handleClick}>DELETE</button>
        </div>
      </Paper>
    );
  }
}

function map_dispatch_to_props(dispatch){
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(null, map_dispatch_to_props)(SingleStory);
