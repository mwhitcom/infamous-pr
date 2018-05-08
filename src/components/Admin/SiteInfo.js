import React, { Component } from 'react';
import { Paper, TextField, RaisedButton } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as infoActionCreators from '../../actions/infoActions';

import './SiteInfo.css';

class SiteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: '',
      services: '',
      street: '',
      city: '',
      zipcode: '',
      email: '',
      loaded: false,
      mode: true
    };
  }

  componentDidMount() {
    this.handleLoad();
  }

  componentDidUpdate() {
    this.handleLoad();
  }

  componentWillUnmount() {
    this.setState({ loaded: false });
  }

  handleLoad = () => {
    const { info } = this.props
    if(info.services && this.state.loaded === false){
      info.services = info.services.replace(/~/g, '\n').replace(/@/g, '&');
      info.about = info.about.replace(/~/g, '\n').replace(/@/g, '&');
      this.setState({ ...this.props.info, loaded: true});
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleClick = () => {
    this.setState({ mode: !this.state.mode });
  }

  handleSave = () => {
    const data = this.state
    this.setState({ mode: !this.state.mode });
    delete data.loaded;
    delete data.mode;
    data.services = data.services.replace(/\r\n|\r|\n/g, '~').replace(/&/g, '@');
    data.about = data.about.replace(/\r\n|\r|\n/g, '~').replace(/&/g, '@');
    this.props.infoActions.updatePageInfo(data);
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
            id="about"
            floatingLabelText="About"
            value={this.state.about.replace(/~/g, '\n').replace(/@/g, '&')}
            onChange={this.handleChange}
            multiLine={true}
            rows={10}
            rowsMax={20}
            fullWidth={true}
            disabled={this.state.mode}
          />
          <TextField
            id="services"
            floatingLabelText="Services"
            value={this.state.services.replace(/~/g, '\n').replace(/@/g, '&')}
            onChange={this.handleChange}
            multiLine={true}
            rows={10}
            rowsMax={20}
            fullWidth={true}
            disabled={this.state.mode}
          />
          <TextField
            id="street"
            floatingLabelText="Street"
            value={this.state.street}
            onChange={this.handleChange}
            fullWidth={true}
            disabled={this.state.mode}
          />
          <TextField
            id="city"
            floatingLabelText="City, State"
            value={this.state.city}
            onChange={this.handleChange}
            fullWidth={true}
            disabled={this.state.mode}
          />
          <TextField
            id="zipcode"
            floatingLabelText="Zipcode"
            value={this.state.zipcode}
            onChange={this.handleChange}
            fullWidth={true}
            disabled={this.state.mode}
          />
          <TextField
            id="email"
            floatingLabelText="Contact Email"
            value={this.state.email}
            onChange={this.handleChange}
            fullWidth={true}
            disabled={this.state.mode}
          />
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  infoActions: bindActionCreators(infoActionCreators, dispatch)
});

export default connect(null, mapDispatchToProps)(SiteInfo);
