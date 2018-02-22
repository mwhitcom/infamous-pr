import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui';

import './Admin.css';
import Data from '../../utils/FillerData';
import ListGrid from './ListGrid.js';

class Admin extends Component {
  render() {
    return (
      <div styleName={'container'}>
        <Tabs>
          <Tab label="News">
            <ListGrid type="NEWS" stories={Data.stories}/>
          </Tab>
          <Tab label="Clients">
            <ListGrid type="CLIENTS" clients={Data.clients}/>
          </Tab>
          <Tab label="Site Info">
            <ListGrid type="SITE INFO"/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Admin;
