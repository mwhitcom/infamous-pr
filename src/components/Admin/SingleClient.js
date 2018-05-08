import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, 
  CardActions, 
  CardMedia, 
  CardTitle, 
  FlatButton, 
  Dialog,
  Toggle
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
      toggle: true,
      open: false
    };
  }

  componentWillMount() {
    const { active } = this.props.data.data;
    this.setState({ status: active });
    active === 'Active' ? this.setState({ toggle: true }) : this.setState({ toggle: false });
  }

  handleClick = () => {
    this.state.status === 'Active' 
      ? this.setState({ status: 'Hidden' }, () => {this.updateStatus();}) 
      : this.setState({ status: 'Active' }, () => {this.updateStatus();});
  }

  updateStatus = () => {
    const { id } = this.props.data;
    const { status } = this.state;
    this.props.clientActions.updateClientStatus({ id, status })
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
    const { data, id } = this.props.data;
    const style = {
      color: 'rgba(255, 255, 255, 0.87)'
    };
    let imageURL = data.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F');
    imageURL = imageURL.split('&');
    imageURL = imageURL[0].split('%2F');
    imageURL = `${imageURL[0]}%2Fthumb_${imageURL[1]}`;

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
        <CardMedia 
          overlay={
            <CardTitle 
              title={data.name} 
              subtitle={
              <Toggle
                label={`Status: ${this.state.status}`}
                labelStyle={style}
                defaultToggled={this.state.toggle}
                onToggle={this.handleClick}
              />
              }
            />
          }
        >
          <img src={imageURL} alt={data.name} />
        </CardMedia>
        <CardActions>
          <Link to={`/admin/client-edit#${id}`}><FlatButton label="EDIT" primary={true}/></Link>
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
