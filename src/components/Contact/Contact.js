import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchInfo } from '../../actions/infoActions';

import './contact.css';
import Navbar from '../Navigation/Navbar';

class Contact extends Component {
  componentDidMount() {
    const { info, fetchInfo } = this.props;
    !info.street && fetchInfo();
  }

  render() {
    const { street, city, zipcode, email } = this.props.info;
    return (
      <div styleName="container">
        <Helmet>
          <title>INFAMOUS - Contact</title>
        </Helmet>
        <div styleName="page-content">
          <Navbar />
          <div styleName="text-content">
            <ul styleName="contact-list">
              <li>{street}</li>
              <li>{city}</li>
              <li>{zipcode}</li>
              <li><a href={`mailto:${email}`}>{email}</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  info: state.info.data
});

const mapDispatchToProps = {
  fetchInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
