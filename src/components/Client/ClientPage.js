import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index.js';

import NavbarClient from '../Navigation/NavbarClient';
import ClientInfo from './ClientInfo';
import ClientNews from './ClientNews';

class ClientPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.fetch_news_stories();
  }

  render() {
    return (
      <div className="client-page">
        <NavbarClient />
        <div className="client-page-container">
          <ClientInfo />
          <ClientNews />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ClientPage);
