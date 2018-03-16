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
    const { services } = this.props.info;
    const content = services 
      ? services
        .split('~')
        .filter(item => item !== '')
        .map((para, index) => <p styleName={'para-text'} key={index}>{para}</p>)
      : '';
    return (
      <div styleName={'container'}>
        <div styleName={'page-content'}>
          <Navbar />
          <div styleName={'text-content'}>
            {content}
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
