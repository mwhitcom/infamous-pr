import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as infoActionCreators from '../../actions/infoActions';

import './Contact.css';
import Navbar from '../Navigation/Navbar';

class Contact extends Component {
  componentWillMount() {
    const { info, infoActions } = this.props;
    !info ? infoActions.fetchAllPageInfo() : '';
  }

  render() {
    const { address, email } = this.props.info;
    const content = address 
      ? address
        .split('~')
        .filter(item => item !== '')
        .map((para, index) => <li key={index}>{para}</li>)
      : '';

    return (
      <div styleName={'container'}>
        <div styleName={'page-content'}>
          <Navbar />
          <div styleName={'text-content'}>
            <ul styleName={'contact-list'}>
              {content}
              <li>{email}</li>
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
