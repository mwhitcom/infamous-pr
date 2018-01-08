import React from 'react';

import './ClientNav.css';

export default function ClientNav() {
  return (
    <ul styleName={'nav-list'}>
      <li styleName={'sort'}>SORT:</li>
      <li styleName={'all'}>ALL</li>
      <li styleName={'item'}>ARTISTS</li>
      <li styleName={'item'}>LABELS</li>
      <li styleName={'item'}>FESTIVALS</li>
      <li styleName={'item'}>EVENTS</li>
      <li styleName={'item'}>BRANDS</li>
      <li styleName={'item'}>TECH</li>
    </ul>
  );
}

