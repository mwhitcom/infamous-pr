import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LinearProgress } from 'material-ui';

import { fetchInfo } from '../../actions/infoActions';

import './Contact.css';
import Navbar from '../Navigation/Navbar';

class Contact extends Component {
  componentDidMount() {
    const { info, fetchInfo } = this.props;
    !info.street && fetchInfo();
  }

  render() {
    const { street, city, zipcode, email } = this.props.info;
    const content = () => {
      if(!street || Object.keys(street).length === 0){
        return <div><LinearProgress mode="indeterminate" /></div>
      } else {
        return(
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
        )
      }
    }
    return (
      <div styleName={'container'}>
        <Helmet>
          <title>INFAMOUS - Contact</title>
        </Helmet>
        <div styleName={'page-content'}>
          <Navbar />
          {content()}
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
