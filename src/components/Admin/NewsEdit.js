import React, { Component } from 'react';
import { Paper, TextField, DatePicker, SelectField, MenuItem, RaisedButton } from 'material-ui';

import './NewsEdit.css';
import Data from '../../utils/FillerData';

class NewsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      outlet: '',
      title: '',
      url: '',
      dek: '',
      client: '',
      image: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value }, () => {
      console.log(this.state)
    });
  }

  handleDate = (event, date) => {
    this.setState({ date });
  }

  handleDropdown = (event, index, value) => {
    this.setState({ client: value });
  }

  render() {
    const items = Data.clients.map((client, index) => {
      return (
        <MenuItem key={index+1} value={client.name} primaryText={client.name} />
      );
    });

    return (
      <div styleName={'container'}>
        <Paper styleName={'content-container'} zDepth={3}>
          <h1 styleName={'title'}>NEWS</h1>
          <form>
            <ul styleName={'top-list'}>
              <li>
                <TextField
                  id="outlet"
                  floatingLabelText="Outlet"
                  value={this.state.outlet}
                  onChange={this.handleChange}
                  fullWidth={true}
                />
              </li>
              <li>
                <DatePicker
                  hintText="Article Publish Date"
                  value={this.state.date}
                  onChange={this.handleDate}
                  fullWidth={true}
                  styleName={'date-input'}
                />
              </li>
              <li>
                <SelectField
                  value={this.state.client}
                  onChange={this.handleDropdown}
                  floatingLabelText="Select Client"
                  fullWidth={true}
                >
                  {items}
                </SelectField>
              </li>
            </ul>
            <TextField
              id="url"
              floatingLabelText="Article URL"
              value={this.state.url}
              onChange={this.handleChange}
              fullWidth={true}
            />
            <TextField
              id="image"
              floatingLabelText="Image URL"
              value={this.state.image}
              onChange={this.handleChange}
              fullWidth={true}
            />
            <TextField
              id="title"
              floatingLabelText="Title"
              value={this.state.title}
              onChange={this.handleChange}
              fullWidth={true}
            />
            <TextField
              id="dek"
              floatingLabelText="Dek / Subtext"
              value={this.state.dek}
              onChange={this.handleChange}
              fullWidth={true}
              multiLine={true}
              rows={2}
            />
            <RaisedButton styleName={'submit-button'} type="submit" >
              SAVE
            </RaisedButton>
          </form>
        </Paper>
      </div>
    );
  }
}

export default NewsEdit;
