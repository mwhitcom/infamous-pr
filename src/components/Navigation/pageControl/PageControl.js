import React from 'react'

import './pageControl.css'

const PageControl = (props) => {
  const activeStyle = {
    color: '#000',
    textDecoration: 'underline',
    fontWeight: '700'
  }

  const pages = props.pages.map((page, index) => {
    if (props.page === 1 && index === 0) {
      return (
        <li id={page} styleName="page-control" style={activeStyle} onClick={props.handleOnePage} key={page}>{page}</li>
      )
    } else if (props.page !== 1 && index === 1) {
      return (
        <li id={page} styleName="page-control" style={activeStyle} onClick={props.handleOnePage} key={page}>{page}</li>
      )
    }
    return (
      <li id={page} styleName="page-control" onClick={props.handleOnePage} key={page}>{page}</li>
    )
  })

  return (
    <div styleName="container">
      <ul styleName="control-list">
        <li id="1" styleName="page-control" onClick={props.handleOnePage}>&#60; &#60; </li>
        <li styleName="page-control" onClick={props.pageDown}>&#60; Previous Page </li>
        {pages}
        <li>... {props.max}</li>
        <li styleName="page-control" onClick={props.pageUp}>Next Page &#62;</li>
        <li id={props.max} styleName="page-control" onClick={props.handleOnePage}> &#62; &#62;</li>
      </ul>
    </div>
  )
}

export default PageControl
