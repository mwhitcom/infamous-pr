import React, { Component } from 'react';
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

  render(){
    return(
      <Card styleName={'container'}>
        <CardMedia overlay={<CardTitle title={this.props.data.name} subtitle={`Status: ${this.state.status}`}/>}>
          <img src={this.props.data.image} alt={this.props.data.name} />
        </CardMedia>
        <CardActions>
          <FlatButton label="EDIT" primary={true}/>
          <FlatButton label="DELETE" primary={true}/>
          <FlatButton onClick={this.handleClick} label="HIDE" primary={true}/>
        </CardActions>
      </Card>
    ); 
  }
}

export default SingleClient;
