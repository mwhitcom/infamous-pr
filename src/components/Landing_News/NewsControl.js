import React from 'react';

import './NewsControl.css';

export default function NewsGrid() {
  return (
    <div styleName={'container'}>
      <ul styleName={'control-list'}>
        <li>&#60; Previous Page </li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>... 200</li>
        <li>Next Page &#62;</li>
      </ul>
    </div>
  );
}
