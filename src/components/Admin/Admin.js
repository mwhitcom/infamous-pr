import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

import './Admin.css';
import DataGrid from './DataGrid';

class Admin extends Component {
  render() {
    return (
      <div styleName={'container'}>
        <Tabs>
          <Tab label="News">
            <DataGrid type={'NEWS'} />
          </Tab>
          <Tab label="Clients">
            <DataGrid type={'CLIENTS'} />
          </Tab>
          <Tab label="Site Info">
            <DataGrid type={'SITE INFO'} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Admin;
