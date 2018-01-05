import React, { Component } from 'react';

import SingleClient from './SingleClient';
import Footer from '../Navigation/Footer';

class ClientGrid extends Component {
  render() {
    return (
      <div className="client-grid-container">
        <div className="client-grid"> 
          <SingleClient />
          <SingleClient />
          <SingleClient />
          <SingleClient />
          <SingleClient />
          <SingleClient />
          <SingleClient />
          <SingleClient />
          <SingleClient />
          <SingleClient />
          <SingleClient />
          <SingleClient />
          <SingleClient />
          <SingleClient />
          <SingleClient />
          <SingleClient />
          <SingleClient />
          <SingleClient />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ClientGrid;
