import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as newsActionCreators from '../../actions/newsActions';
import * as clientActionCreators from '../../actions/clientActions';
import * as infoActionCreators from '../../actions/infoActions';

import './Admin.css';
import NewsGrid from './NewsGrid';
import ClientGrid from './ClientGrid';
import InfoGrid from './InfoGrid';

class Admin extends Component {
  componentWillMount() {
    const token = sessionStorage.getItem('token');
    !token && this.props.history.push('/login');
    window.scrollTo(0,0);
    const { newsActions, clientActions, infoActions } = this.props;
    newsActions.fetchAllNews();
    clientActions.fetchAllClients();
    infoActions.fetchAllPageInfo();
  }

  render() {
    const { news, clients, info } = this.props;
    return (
      <div styleName={'container'}>
        <Tabs>
          <Tab label="News">
            <NewsGrid stories={news}/>
          </Tab>
          <Tab label="Clients">
            <ClientGrid clients={clients}/>
          </Tab>
          <Tab label="Site Info">
            <InfoGrid info={info}/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news,
    clients: state.clients,
    info: state.info
  };
};

const mapDispatchToProps = dispatch => ({
  newsActions: bindActionCreators(newsActionCreators, dispatch),
  clientActions: bindActionCreators(clientActionCreators, dispatch),
  infoActions: bindActionCreators(infoActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Admin));
