import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      subMenu: {
        display: this.props.clients ? 'static' : 'none'
      }
    };

    return (
      <div className="full-nav-container">
        <div className="logo-container">
          <Link to="/">
            <img className="white-logo" src="/assets/images/infamous_logo_black.png" alt="Infamous" />
          </Link>
        </div>
        <ul className="menu-list">
          <li><Link className="full-nav-link" to="/dsp">DSP</Link></li>
          <li><Link className="full-nav-link" to="/clients">Clients</Link></li>
          <li><Link className="full-nav-link" to="/">News</Link></li>
          <li><Link className="full-nav-link" to="/about">About</Link></li>
        </ul>
        <div style={style.subMenu} className="client-sub-menu">
          <ul className="filter-list">
            <li className="filter-item">
              <button>All</button>
            </li>
            <li className="filter-item">
              <button>Artists</button>
            </li>
            <li className="filter-item">
              <button>Labels</button>
            </li>
            <li className="filter-item">
              <button>Events</button>
            </li>
            <li className="search-bar-box">            
              <form>
                <input className="search-bar" placeholder="Search" />
              </form>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
