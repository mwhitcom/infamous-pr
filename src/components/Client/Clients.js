import React, { Component } from 'react';

import './Clients.css';
import Data from '../../utils/FillerData';
import Nav from '../Landing_News/FooterBlock';
import ClientNav from './ClientNav';
import ClientContainer from './ClientContainer';

class Clients extends Component {
  render() {
    return (
      <div styleName={'container'}>
        <div styleName={'content'}>
          <Nav type={'nav'} />
          <div styleName={'grid-container'}>
            <ClientNav />
            <ClientContainer type={'ARTISTS'} list={Data.clients} />
            <ClientContainer type={'LABELS'} list={Data.clients} />
            <ClientContainer type={'FESTIVALS'} list={Data.clients} />
            <ClientContainer type={'EVENTS'} list={Data.clients} />
            <ClientContainer type={'BRANDS'} list={Data.clients} />
            <ClientContainer type={'TECH'} list={Data.clients} />
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
