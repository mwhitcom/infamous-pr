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
    const { street, city, zipcode, email } = this.props.info;
    return (
      <div styleName={'container'}>
        <div styleName={'page-content'}>
          <Navbar />
          <div styleName={'text-content'}>
            <ul styleName={'contact-list'}>
              <li>{street}</li>
              <li>{city}</li>
              <li>{zipcode}</li>
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
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
