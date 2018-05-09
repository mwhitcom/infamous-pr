import React from 'react';

import './PageControl.css';

export default function PageControl(props) {
  const activeStyle = {
    color: '#000',
    textDecoration: 'underline',
    fontWeight: '700'
  }

  const pages = props.pages.map((page, index) => {
    if (props.page === 1 && index === 0) {
      return(
        <li id={page} styleName={'page-control'} style={activeStyle} onClick={props.handleOnePage} key={index}>{page}</li>
      );
    } else if (props.page !== 1 && index === 1){
      return(
        <li id={page} styleName={'page-control'} style={activeStyle} onClick={props.handleOnePage} key={index}>{page}</li>
      );
    } 
    return(
      <li id={page} styleName={'page-control'} onClick={props.handleOnePage} key={index}>{page}</li>
    );
  })

  return (
    <div styleName={'container'}>
      <ul styleName={'control-list'}>
        <li styleName={'page-control'} onClick={props.pageDown}>&#60; Previous Page </li>
        {pages}
        <li>... {props.max}</li>
        <li styleName={'page-control'} onClick={props.pageUp}>Next Page &#62;</li>
      </ul>
    </div>
  );
}
