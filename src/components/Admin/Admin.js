import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/index.js';

import './Admin.css';
import Data from '../../utils/FillerData';
import ListGrid from './ListGrid.js';

class Admin extends Component {
  componentWillMount() {
    this.props.actions.fetch_all_news();
    // !this.props.all_news ? this.props.actions.fetch_all_news() : '';
    !this.props.all_artists ? this.props.actions.fetch_all_artists() : '';
  }

  render() {
    return (
      <div styleName={'container'}>
        <Tabs>
          <Tab label="News">
            <ListGrid type="NEWS" stories={this.props.all_news ? this.props.all_news.data: []}/>
          </Tab>
          <Tab label="Clients">
            <ListGrid type="CLIENTS" clients={this.props.all_artists ? this.props.all_artists.data.fullList : []}/>
          </Tab>
          <Tab label="Site Info">
            <ListGrid type="SITE INFO"/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

function map_state_to_props(state, ownProps){
  return {
     all_news: state.clientReducer.all_news,
     all_artists: state.clientReducer.all_artists
  }
}

function map_dispatch_to_props(dispatch){
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(map_state_to_props, map_dispatch_to_props)(Admin);


