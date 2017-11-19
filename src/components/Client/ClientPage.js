import React, { Component } from 'react';

import NavbarClient from '../Navigation/NavbarClient';
import ClientInfo from './ClientInfo';
import ClientNews from './ClientNews';

class ClientPage extends Component {
  render() {
    return (
      <div className="client-page">
        <NavbarClient />
        <div className="client-page-container">
          <ClientInfo />
          <ClientNews />
        </div>
      </div>
    );
  }
}

export default ClientPage;
