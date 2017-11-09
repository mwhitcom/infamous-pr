import React, { Component } from 'react';

import Navbar from './Navbar';
import ClientGrid from './ClientGrid';

class Clients extends Component {
  render() {
    return (
      <div>
        <div className="client-nav-container">
          <Navbar />
        </div>
        <ClientGrid />
      </div>
    );
  }
}

export default Clients;
