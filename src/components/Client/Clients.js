import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions/index.js';

import './Clients.css';
import Data from '../../utils/FillerData';
import Nav from '../Landing_News/FooterBlock';
import ClientContainer from './ClientContainer';

const types = ['artists', 'labels', 'festivals', 'events', 'brands', 'tech'];

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all'
    }
  }

  componentWillMount(){
    this.props.actions.fetch_all_artists()
  }

  handleUpdate = (type) => {
    return this.props.all_artists ? this.props.all_artists.data[type] : [];
  }

  handleClick = (event) => {
    this.setState({ filter: event.target.id });
  }

  style = (filter) => {
    return {
      textDecorationLine: this.state.filter === filter ? 'underline' : 'none',
      color: this.state.filter === filter ? '#000' : '#aaaaaa'
    }
  }

  render() {
    const sections = types.map(type => {
      const style = this.state.filter === 'all' 
        ? {} 
        : this.state.filter === type 
          ? {} 
          : {display: 'none'}; 
      return (<ClientContainer type={type.toUpperCase()} style={style} list={this.handleUpdate(type)} />);
    });

    const nav = types.map(type => {
      return (<li styleName={'item'} id={type} style={this.style({type})} onClick={this.handleClick}>{type.toUpperCase()}</li>);
    });

    return (
      <div styleName={'container'}>
        <div styleName={'content'}>
          <Nav type={'nav'} />
          <div styleName={'grid-container'}>
            <ul styleName={'nav-list'}>
              <li styleName={'sort'}>SORT:</li>
              <li styleName={'item'} id="all" style={this.style('all')} onClick={this.handleClick}>ALL</li>
              {nav}
            </ul>
            {sections}
          </div>
        </div>
      </div>
    );
  }
}

function map_state_to_props(state, ownProps) {
  return {
      all_artists: state.clientReducer.all_artists
  };
}

function map_dispatch_to_props(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(map_state_to_props, map_dispatch_to_props)(Clients);
