import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

import './Admin.css';
import DataGrid from './DataGrid';
<<<<<<< HEAD
=======
import Data from '../../utils/FillerData';
>>>>>>> ce2299a072be086d14015624bba59da7ddd51a2f

class Admin extends Component {
  render() {
    return (
      <div styleName={'container'}>
        <Tabs>
          <Tab label="News">
<<<<<<< HEAD
            <DataGrid type={'NEWS'} />
          </Tab>
          <Tab label="Clients">
            <DataGrid type={'CLIENTS'} />
=======
            <DataGrid type={'NEWS'} stories={Data.stories} />
          </Tab>
          <Tab label="Clients">
            <DataGrid type={'CLIENTS'} clients={Data.clients} />
>>>>>>> ce2299a072be086d14015624bba59da7ddd51a2f
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
