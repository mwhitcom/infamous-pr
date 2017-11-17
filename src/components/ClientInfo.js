import React, { Component } from 'react';

import ClientImage from './ClientImage';
import ClientBio from './ClientBio';

class ClientInfo extends Component {
  render() {
    return (
      <div className="client-info-container">
        <div className="client-info">
          <ClientImage />
          <ClientBio />
        </div>
      </div>
    );
  }
}

export default ClientInfo;
