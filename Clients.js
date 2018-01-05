import React, { Component } from 'react';

import Navbar from '../Navigation/Navbar';
import ClientGrid from './ClientGrid';

class Clients extends Component {
  render() {
    return (
      <div>
        <div className="client-nav-container">
          <Navbar clients={'true'} />
        </div>
        <ClientGrid />
      </div>
    );
  }
}

export default Clients;
