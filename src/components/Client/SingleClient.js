import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions/index.js';

import './SingleClient.css';

class SingleClient extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image, idData, name } = this.props;
    const style = {
      backgroundImage: `url(${image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')})`
    }

    return (
      <Link styleName={'container'} to={`/client#${idData}`}>
        <div styleName={'image-container'} style={style} />
        <h2 styleName={'title'}>{name}</h2>
      </Link>
    );
  }
}


function map_dispatch_to_props(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(null, map_dispatch_to_props)(SingleClient);
