import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions/index.js';

import './SingleClient.css';

class SingleClient extends Component {
  constructor(props) {
    super(props);
  }

  fetchData = () => {
    this.props.actions.fetch_single_artist(this.props.name);
  }

  render() {
    return (
      <Link styleName={'container'} to={`/client#${this.props.name.replace(' ', '-')}`}>
        <div styleName={'image-container'} >
          <img styleName={'image'}src={this.props.image} alt={this.props.name} onClick={this.fetchData()}/>
        </div>
        <h2 styleName={'title'}>{this.props.name}</h2>
      </Link>
    );
  }
}


function map_dispatch_to_props(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(null, map_dispatch_to_props)(SingleClient);
