import React, { Component } from 'react';

import FILLER from '../../utils/FillerData';

class ClientImage extends Component {
  render() {
    return (
      <div className="client-image-container">
        <ul className="link-container">
          <li><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            <img className="link-logo" src="/assets/images/Facebook.png" alt="Facebook" />
          </a></li>
          <li><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            <img className="link-logo" src="/assets/images/Twitter.png" alt="Twitter" />
          </a></li>
          <li><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            <img className="link-logo" src="/assets/images/Instagram.png" alt="Instagram" />
          </a></li>
          <li><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            <img className="link-logo" src="/assets/images/YouTube.png" alt="YouTube" />
          </a></li>
          <li><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            <img className="link-logo" src="/assets/images/SoundCloud.png" alt="SoundCloud" />
          </a></li>
          <li>
            <h2 className="link-button">Website</h2>
          </li>
          <li>
            <h2 className="link-button">Press Kit</h2>
          </li>
        </ul>
        <img className="client-page-image" src={FILLER.client_image} alt="client name" />
      </div>
    );
  }
}

export default ClientImage;
