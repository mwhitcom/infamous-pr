import React from 'react'

import './bioBlock.css'

const BioBlock = props => (
  <div styleName="container">
    {props.text.bio
      .split('~')
      .filter(item => item !== '')
      .map((para, index) => <p styleName="para-text" key={para}>{para}</p>)
    }
  </div>
)

export default BioBlock
