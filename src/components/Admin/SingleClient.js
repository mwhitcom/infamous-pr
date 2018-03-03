import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, 
  CardActions, 
  CardHeader, 
  CardMedia, 
  CardTitle, 
  CardText, 
  FlatButton
} from 'material-ui';

import './SingleClient.css';

class SingleClient extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'Active'
    };
  }

  handleClick = () => {
    this.state.status === 'Active' 
      ? this.setState({status: 'Hidden'}) 
      : this.setState({status: 'Active'});
  }

  handleDeleteModal = () => {
    console.log('hello')
  }
  
  render(){
    const style = {
      backgroundImage: `url(${this.props.data.image})`
    }
    return(
      <Card styleName={'container'}>
        <CardMedia overlay={<CardTitle title={this.props.data.name} subtitle={`Status: ${this.state.status}`}/>}>
          <img src={this.props.data.image} alt={this.props.data.name} />
        </CardMedia>
        <CardActions>
          <Link to={`/admin/client-edit#${this.props.data.name.replace(' ', '-')}`}><FlatButton label="EDIT" primary={true}/></Link>
          <FlatButton onClick={this.handleClick} label="HIDE" primary={true}/>
          <FlatButton onClick={this.handleDeleteModal} label="DELETE" primary={true}/>
        </CardActions>
      </Card>
    ); 
  }
}

export default SingleClient;
