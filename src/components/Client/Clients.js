import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions/index'
import './Clients.css';
import Data from '../../utils/FillerData';
import Nav from '../Landing_News/FooterBlock';
import ClientNav from './ClientNav';
import ClientContainer from './ClientContainer';

class Clients extends Component {
  constructor(props){}
  // run this function to dispatch API call to fetch artist profile when you click on their name link
  fetch_artist_info(){
    // pass in artist name to the function and put it in the dispatch
    // let artist_name = [NAME].toUpperCase()
    // replace PETE TONG with artist name
    this.props.action.fetch_artist_info('PETE TONG')
  }
  render() {
    return (
      <div styleName={'container'}>
        <div styleName={'content'}>
          <Nav type={'nav'} />
          <div styleName={'grid-container'}>
            <ClientNav />
            <ClientContainer type={'ARTISTS'} list={Data.clients} />
            <ClientContainer type={'LABELS'} list={Data.clients} />
            <ClientContainer type={'FESTIVALS'} list={Data.clients} />
            <ClientContainer type={'EVENTS'} list={Data.clients} />
            <ClientContainer type={'BRANDS'} list={Data.clients} />
            <ClientContainer type={'TECH'} list={Data.clients} />
          </div>
        </div>
      </div>
    );
  }
}

function map_sate_to_props(state, ownProps){
  return {
      all_artist: state.client_reducer.all_artist
  }
}

function map_dispatch_to_props(dispatch){
  return { action: bindActionCreators(actions, dispatch)}
}

export default connect(map_state_to_props, map_dispatch_to_props)(Clients);
