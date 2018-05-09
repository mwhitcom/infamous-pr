import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LinearProgress } from 'material-ui';

import { fetchInfo } from '../../actions/infoActions';

import './About.css';
import Navbar from '../Navigation/Navbar';

class About extends Component {
  componentDidMount() {
    const { info, fetchInfo } = this.props;
    !info.about && fetchInfo();
  }

  render() {
    const { about } = this.props.info;
    const content = () => {
      if (!about || Object.keys(about).length === 0){
        return <div><LinearProgress mode="indeterminate" /></div>
      } else {
        return (
          <div styleName={'text-content'}>
            {about
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
          <title>INFAMOUS - About</title>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
