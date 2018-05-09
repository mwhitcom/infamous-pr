import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LinearProgress } from 'material-ui';

import { fetchInfo } from '../../actions/infoActions';

import './Services.css';
import Navbar from '../Navigation/Navbar';

class Services extends Component {
  componentDidMount() {
    const { info, fetchInfo } = this.props;
    !info.services && fetchInfo();
  }
  
  render() {
    const { services } = this.props.info;
    const content = () => {
      if (!services || Object.keys(services).length === 0){
        return <div><LinearProgress mode="indeterminate" /></div>
      } else {
        return (
          <div styleName={'text-content'}>
            {services
              .split('~')
              .filter(item => item !== '')
              .map((para, index) => <p styleName={'para-text'} key={index}>{para}</p>)
            }
          </div>
        )
      }
    }

    return (
      <div styleName={'container'}>
        <Helmet>
          <title>INFAMOUS - Services</title>
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

export default connect(mapStateToProps, mapDispatchToProps)(Services);
