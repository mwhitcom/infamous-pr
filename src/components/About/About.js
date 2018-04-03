import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LinearProgress } from 'material-ui';

import * as infoActionCreators from '../../actions/infoActions';

import './About.css';
import Navbar from '../Navigation/Navbar';

class About extends Component {
  componentWillMount() {
    const { info, infoActions } = this.props;
    !info ? infoActions.fetchAllPageInfo() : '';
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

const mapStateToProps = state => {
  return { info: state.info };
};

const mapDispatchToProps = dispatch => ({
  infoActions: bindActionCreators(infoActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
