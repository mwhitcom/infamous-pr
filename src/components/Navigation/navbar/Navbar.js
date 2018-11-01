import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar = (props) => {
  const content = () => {
    if (props.type && props.address) {
      const { street, city, zipcode } = props.address;
      const address = street ? `${street} ${city} ${zipcode}` : '';

      return <li styleName="address">{address}</li>
    }
    return (
      <li styleName="home-link logo">
        <Link to="/">
          <img styleName="image" src="/assets/images/infamous_logo_black.png" alt="Infamous" />
        </Link>
      </li>
    )
  }

  return (
    <div styleName="container">
      <ul styleName={props.type ? 'landing-list' : 'nav-list'}>
        {content()}
        <li styleName={props.type ? 'landing-nav' : 'nav-links full-nav'}>
          <Link styleName="link" to="/clients">CLIENTS</Link>
          <Link styleName="link" to="/about">ABOUT</Link>
          <Link styleName="link" to="/news">NEWS</Link>
          {/* <Link styleName="link" to="/services">SERVICES</Link> */}
          <Link styleName="link" to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
