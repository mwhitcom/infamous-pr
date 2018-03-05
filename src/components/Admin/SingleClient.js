import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, 
  CardActions, 
  CardHeader, 
  CardMedia, 
  CardTitle, 
  CardText, 
  FlatButton, 
  Dialog
} from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/index.js';

import './SingleClient.css';

class SingleClient extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'Active',
      open: false
    };
  }

  handleClick = () => {
    this.state.status === 'Active' 
      ? this.setState({status: 'Hidden'}) 
      : this.setState({status: 'Active'});
  }

  handleOpen = () => {
    this.setState({open: true});
  }
  
  handleClose = () => {
    this.setState({open: false});
  }

  handleDelete = () => {
    this.props.actions.delete_client_profile(this.props.data.name.toUpperCase());
    this.props.actions.fetch_all_news();
    this.setState({open: false});
  }
  
  render(){
    const style = {
      backgroundImage: `url(${this.props.data.image})`
    }
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
        onClick={this.handleDelete}
      />,
    ];
    return(
      <Card styleName={'container'}>
        <Dialog
          title="Confirm Delete"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Are you sure you want to delete this client?
        </Dialog>
        <CardMedia overlay={<CardTitle title={this.props.data.name} subtitle={`Status: ${this.state.status}`}/>}>
          <img src={this.props.data.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')} alt={this.props.data.name} />
        </CardMedia>
        <CardActions>
          <Link to={`/admin/client-edit#${this.props.data.name.replace(' ', '-')}`}><FlatButton label="EDIT" primary={true}/></Link>
          <FlatButton onClick={this.handleClick} label="HIDE" primary={true}/>
          <FlatButton onClick={this.handleOpen} label="DELETE" primary={true}/>
        </CardActions>
      </Card>
    ); 
  }
}

function map_dispatch_to_props(dispatch){
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(null, map_dispatch_to_props)(SingleClient);
