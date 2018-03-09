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

import * as clientActionCreators from '../../actions/clientActions';

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
    const { clientActions } = this.props;
    const { id } = this.props.data;
    clientActions.deleteClientProfile(id);
    this.setState({open: false});
  }
  
  render(){
    const { data } = this.props;
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
        <CardMedia overlay={<CardTitle title={data.data.name} subtitle={`Status: ${this.state.status}`}/>}>
          <img src={data.data.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')} alt={data.data.name} />
        </CardMedia>
        <CardActions>
          <Link to={`/admin/client-edit#${data.id}`}><FlatButton label="EDIT" primary={true}/></Link>
          {/* <FlatButton onClick={this.handleClick} label="HIDE" primary={true}/> */}
          <FlatButton onClick={this.handleOpen} label="DELETE" primary={true}/>
        </CardActions>
      </Card>
    ); 
  }
}

const mapDispatchToProps = dispatch => ({
  clientActions: bindActionCreators(clientActionCreators, dispatch)
});

export default connect(null, mapDispatchToProps)(SingleClient);
