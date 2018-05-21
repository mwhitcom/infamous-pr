import React, { Component } from 'react'

import './topBlock.css'

class TopBlock extends Component {
  state = {
    loaded: false
  }

  handleLoad = () => {
    this.setState({ loaded: true })
  }

  render () {
    const { data } = this.props
    const { loaded } = this.state
    const style = loaded ? { maxHeight: '100vh' } : { height: '100vh' }

    return (
      <div styleName="image-container" style={style}>
        <h1 styleName="client-title">{data.name}</h1>
        <img src={data.image} alt={data.name} onLoad={this.handleLoad} />
      </div>
    )
  }
}

export default TopBlock
