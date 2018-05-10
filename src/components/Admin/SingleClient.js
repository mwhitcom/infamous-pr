import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardMedia, CardTitle, FlatButton, Dialog } from 'material-ui';
import { connect } from 'react-redux';

import { deleteClient } from '../../actions/clientActions';
import './SingleClient.css';

class SingleClient extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  }
  
  handleClose = () => {
    this.setState({open: false});
  }

  handleDelete = () => {
    const { deleteClient } = this.props;
    const { id } = this.props.data;
    deleteClient(id);
    this.setState({open: false});
  }
  
  render(){
    const { data, id } = this.props.data;
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
              subtitle={`Status: ${data.active}`}
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

const mapDispatchToProps = {
  deleteClient
}

export default connect(null, mapDispatchToProps)(SingleClient);
