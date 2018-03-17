import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
import moment from 'moment';

import './ClientGrid.css'
import SingleClient from './SingleClient';

class ClientGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: 0
    }
  }

  renderClients = () => {
    const { clients } = this.props;
    clients.sort((a,b) => {
      return (a.data.name > b.data.name) ? 1 : ((b.data.name > a.data.name) ? -1 : 0);
    }); 
    return clients.map(client => {
      return <SingleClient data={client}/>;
    });   
  }

  render() {
    return (
      <div styleName={'container'}>
        <div styleName={'title-box'}>
          <h1 styleName={'title'}>CLIENTS</h1>
          <div styleName={'button-box'}>
            <Link to={'/admin/client-edit'}><RaisedButton label={'CREATE NEW'} secondary={true} fullWidth={true} /></Link>
          </div>
        </div>
        <div styleName={'client-box'}>
          {this.renderClients()}
        </div>
      </div>
    );
  }
}

export default ClientGrid;
