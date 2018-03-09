import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

export default SingleClient;
