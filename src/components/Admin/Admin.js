import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as newsActionCreators from '../../actions/newsActions';
import * as clientActionCreators from '../../actions/clientActions';

import './Admin.css';
import Data from '../../utils/FillerData';
import ListGrid from './ListGrid.js';

class Admin extends Component {
  componentWillMount() {
    const token = sessionStorage.getItem('token');
    token ? '' : this.props.history.push('/login');
    window.scrollTo(0,0);
    const { newsActions, clientActions } = this.props;
    newsActions.fetchAllNews();
    clientActions.fetchAllClients();
  }

  render() {
    const { news, clients } = this.props;
    return (
      <div styleName={'container'}>
        <Tabs>
          <Tab label="News">
            <ListGrid type="NEWS" stories={news}/>
          </Tab>
          <Tab label="Clients">
            <ListGrid type="CLIENTS" clients={clients}/>
          </Tab>
          <Tab label="Site Info">
            <ListGrid type="SITE INFO"/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news,
    clients: state.clients
  };
};

const mapDispatchToProps = dispatch => ({
  newsActions: bindActionCreators(newsActionCreators, dispatch),
  clientActions: bindActionCreators(clientActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Admin));
