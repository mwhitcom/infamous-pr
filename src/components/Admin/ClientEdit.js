import React, { Component } from 'react';
import { Paper, TextField, DatePicker, SelectField, MenuItem, RaisedButton } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actionCreators from '../../actions/index.js';

import './ClientEdit.css';

const types = ['artist', 'label', 'festival', 'event', 'brand', 'tech'];

class ClientEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      image: '',
      bio: '',
      facebook: '',
      twitter: '',
      instagram: '',
      youtube: '',
      soundcloud: '',
      website: '',
      pressKit: '',
      loaded: false
    }
  }

  componentWillMount() {
    this.props.all_artists ? this.handleLoad() : this.props.actions.fetch_all_artists();
  }

  componentDidUpdate() {
    this.handleLoad();
  }

  handleLoad = () => {
    if(this.props.location.hash !== ''){
      const name = this.props.location.hash.replace('#', '').replace('-', ' ').toUpperCase();
      const clientData = this.props.all_artists ? this.props.all_artists.data.fullList.filter(artist => artist.name === name) : false;
      if(clientData && !this.state.loaded){
        // clientData[0].type = clientData[0].type.toUpperCase();
        this.setState({loaded: true});
        this.setState({...clientData[0]});
      }
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleDropdown = (event, index, value) => {
    this.setState({ type: value });
  }

  handleSave = () => {
    const data = this.state;
    delete data.loaded;
    if(this.props.location.hash !== '') {
      this.props.actions.update_artist_profile(data);
    } else {
      this.props.actions.create_artist_profile(data);
    }
  }

  render() {
    const items = types.map((type, index) => {
      return (
        <MenuItem key={index+1} value={type.toUpperCase()} primaryText={type.toUpperCase()} />
      );
    });

    return (
      <div styleName={'container'}>
        <Paper styleName={'content-container'} zDepth={3}>
          <h1 styleName={'title'}>CLIENT</h1>
          <div>
            <ul styleName={'top-list'}>
              <li>
                <TextField
                  id="name"
                  floatingLabelText="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  fullWidth={true}
                />
              </li>
              <li>
                <SelectField
                  value={this.state.type.toUpperCase()}
                  onChange={this.handleDropdown}
                  floatingLabelText="Select Type"
                  fullWidth={true}
                >
                  {items}
                </SelectField>
              </li>
            </ul>
            <TextField
              id="image"
              floatingLabelText="Image URL"
              value={this.state.image}
              onChange={this.handleChange}
              fullWidth={true}
            />
            <TextField
              id="facebook"
              floatingLabelText="Facebook URL"
              value={this.state.facebook}
              onChange={this.handleChange}
              fullWidth={true}
            />
            <TextField
              id="twitter"
              floatingLabelText="Twitter URL"
              value={this.state.twitter}
              onChange={this.handleChange}
              fullWidth={true}
            />
            <TextField
              id="instagram"
              floatingLabelText="Instagram URL"
              value={this.state.instagram}
              onChange={this.handleChange}
              fullWidth={true}
            />
            <TextField
              id="youtube"
              floatingLabelText="YouTube URL"
              value={this.state.youtube}
              onChange={this.handleChange}
              fullWidth={true}
            />
            <TextField
              id="soundcloud"
              floatingLabelText="Soundcloud URL"
              value={this.state.soundcloud}
              onChange={this.handleChange}
              fullWidth={true}
            />
            <TextField
              id="website"
              floatingLabelText="Website URL"
              value={this.state.website}
              onChange={this.handleChange}
              fullWidth={true}
            />
            <TextField
              id="pressKit"
              floatingLabelText="Press Kit Filler"
              value={this.state.pressKit}
              onChange={this.handleChange}
              fullWidth={true}
            />
            <TextField
              id="bio"
              floatingLabelText="Bio"
              value={this.state.bio}
              onChange={this.handleChange}
              multiLine={true}
              rows={10}
              rowsMax={20}
              fullWidth={true}
            />
            <Link to="/admin"><button styleName={'save-button'} onClick={this.handleSave}>SAVE</button></Link>
          </div>
        </Paper>
      </div>
    );
  }
}

function map_state_to_props(state, ownProps){
  return {
     all_artists: state.clientReducer.all_artists
  }
}

function map_dispatch_to_props(dispatch){
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(map_state_to_props, map_dispatch_to_props)(ClientEdit);
