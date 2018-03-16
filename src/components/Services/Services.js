import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as infoActionCreators from '../../actions/infoActions';

import './Services.css';
import Navbar from '../Navigation/Navbar';

class Services extends Component {
  componentWillMount() {
    const { info, infoActions } = this.props;
    !info ? infoActions.fetchAllPageInfo() : '';
  }
  
  render() {
    const { info } = this.props;
    return (
      <div styleName={'container'}>
        <div styleName={'page-content'}>
          <Navbar />
          <div styleName={'text-content'}>
            {info.services}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { info: state.info };
};

const mapDispatchToProps = dispatch => ({
  infoActions: bindActionCreators(infoActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
