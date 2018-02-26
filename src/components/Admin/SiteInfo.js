import React, { Component } from 'react';
import { Paper, TextField, RaisedButton } from 'material-ui';

import './SiteInfo.css';

class SiteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '8511 Washington Blvd, Culver City, CA 90232',
      aboutText: '',
      servicesText: '',
      contactText: '',
      mode: true
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleClick = () => {
    this.setState({ mode: !this.state.mode });
  }

  handleSave = () => {
    this.setState({ mode: !this.state.mode });
    // code for saving
  }

  render() {
    const buttonText = this.state.mode ? 'EDIT' : 'SAVE';
    const handleSwap = this.state.mode ? this.handleClick : this.handleSave;
    return (
      <div styleName={'container'}>
        <Paper zDepth={3} styleName={'info-box'}>
          <RaisedButton styleName={'submit-button'} onClick={handleSwap} type="button">
              {buttonText}
          </RaisedButton>
          <TextField
            id="aboutText"
            floatingLabelText="About Text"
            value={this.state.aboutText}
            onChange={this.handleChange}
            multiLine={true}
            rows={10}
            rowsMax={20}
            fullWidth={true}
            disabled={this.state.mode}
          />
          <TextField
            id="servicesText"
            floatingLabelText="Services Text"
            value={this.state.servicesText}
            onChange={this.handleChange}
            multiLine={true}
            rows={10}
            rowsMax={20}
            fullWidth={true}
            disabled={this.state.mode}
          />
          <TextField
            id="contactText"
            floatingLabelText="Contact Text"
            value={this.state.contactText}
            onChange={this.handleChange}
            multiLine={true}
            rows={10}
            rowsMax={20}
            fullWidth={true}
            disabled={this.state.mode}
          />
          <TextField
            id="address"
            floatingLabelText="Address"
            value={this.state.address}
            onChange={this.handleChange}
            fullWidth={true}
            disabled={this.state.mode}
          />
        </Paper>
      </div>
    );
  }
}

export default SiteInfo;
