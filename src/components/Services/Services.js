import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchInfo } from '../../actions/infoActions'

import './services.css'
import Navbar from '../Navigation/navbar/Navbar'

class Services extends Component {
  componentDidMount () {
    const { info, fetchInfo } = this.props
    !info.services && fetchInfo()
  }

  render () {
    const { services } = this.props.info
    return (
      <div styleName="container">
        <Helmet>
          <title>INFAMOUS - Services</title>
        </Helmet>
        <div styleName="page-content">
          <Navbar />
          <div styleName="text-content">
            {services
              .split('~')
              .filter(item => item !== '')
              .map((para, index) => <p styleName="para-text" key={para}>{para}</p>)
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  info: state.info.data
})

const mapDispatchToProps = {
  fetchInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Services)
