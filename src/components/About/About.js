import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchInfo } from '../../actions/infoActions';

import './about.css';
import Navbar from '../Navigation/navbar/Navbar';

class About extends Component {
  componentDidMount() {
    const { info, fetchInfo } = this.props;
    !info.about && fetchInfo();
  }

  render() {
    const { about } = this.props.info;
    return (
      <div styleName="container">
        <Helmet>
          <title>INFAMOUS - About</title>
        </Helmet>
        <div styleName="page-content">
          <Navbar />
          <div styleName="text-content">
            {about
              .split('~')
              .filter(item => item !== '')
              .map((para, index) => <p styleName="para-text" key={index}>{para}</p>)
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
