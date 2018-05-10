import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton, TextField } from 'material-ui';

import './clientGrid.css'
import SingleClient from './singleClient/SingleClient';

class ClientGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: 0,
      search: ''
    }
  }
  renderSearch = () => {
    const { clients } = this.props;
    const { search } = this.state;
    const searched = clients.filter(client => {
      const { name } = client.data;
      return name.toLowerCase().search(search.toLowerCase()) !== -1; 
    });
    return searched.map((client, index) => <SingleClient data={client} key={index} />);
  }

  handleSearch = (event) => {
    const { value } = event.target
    this.setState({ search: value });
  }

  renderClients = () => {
    const { clients } = this.props;
    clients.sort((a,b) => {
      return (a.data.name > b.data.name) ? 1 : ((b.data.name > a.data.name) ? -1 : 0);
    }); 
    return clients.map((client, index) => {
      return <SingleClient data={client} key={index} />;
    });   
  }

  render() {
    return (
      <div styleName={'container'}>
        <div styleName={'title-box'}>
          <h1 styleName={'title'}>CLIENTS</h1>
          <div styleName={'search-box'}>
            <TextField
              id="search"
              floatingLabelText="Search"
              value={this.state.search}
              onChange={this.handleSearch}
              fullWidth={true}
            />
          </div>
          <div styleName={'button-box'}>
            <Link to={'/admin/client-edit'}><RaisedButton label={'CREATE NEW'} secondary={true} fullWidth={true} /></Link>
          </div>
        </div>
        <div styleName={'client-box'}>
          {this.state.search ? this.renderSearch() : this.renderClients()}
        </div>
      </div>
    );
  }
}

export default ClientGrid;
