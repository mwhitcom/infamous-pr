import React, { Component } from 'react';
import { Paper, TextField, DatePicker, SelectField, MenuItem, RaisedButton } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FileUpload from './FileUpload';

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
      loaded: false,
      imageLoad: false,
      pressLoad: false,
    }
  }

  componentWillMount() {
    const token = sessionStorage.getItem('token');
    token ? '' : this.props.history.push('/login')
    this.props.all_artists ? this.handleLoad() : this.props.actions.fetch_all_artists();
  }

  componentDidUpdate() {
    this.handleLoad();
    if(this.props.image_url && !this.state.imageLoad) {
      this.setState({ 
        image: this.props.image_url.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F'),
        imageLoad: true
      });
    }
    if(this.props.pressKit_url && !this.state.pressLoad) {
      this.setState({ 
        pressKit: this.props.pressKit_url.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F'),
        pressLoad: true
      });
    }
  }

  handleLoad = () => {
    if(this.props.location.hash !== ''){
      const name = this.props.location.hash.replace(/#/g, '').replace(/-/g, ' ').toUpperCase();
      const [clientData] = this.props.all_artists ? this.props.all_artists.data.fullList.filter(artist => artist.name === name) : false;
      console.log(clientData)
      clientData.image = clientData.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')
      clientData.pressKit = clientData.pressKit.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')
      if(clientData && !this.state.loaded){
        this.setState({loaded: true});
        this.setState({...clientData});
      }
    }
  }

  handleChange = (event) => {
    if(event.target.id === 'name'){
      this.setState({ [event.target.id]: event.target.value.toUpperCase() });
    }
    this.setState({ [event.target.id]: event.target.value });
  }

  handleDropdown = (event, index, value) => {
    this.setState({ type: value.toLowerCase() });
  }

  handleSave = () => {
    const data = this.state;
    delete data.loaded;
    delete data.imageLoad;
    delete data.pressLoad;
    data.name = data.name.toUpperCase();
    data.image = data.image.replace(/=/g, '@').replace(/&/g, '~').replace(/%2F/g, '!');
    data.pressKit = data.pressKit.replace(/=/g, '@').replace(/&/g, '~').replace(/%2F/g, '!');
    if(this.props.location.hash !== '') {
      console.log(data)
      this.props.actions.update_client_profile(data);
    } else {
      console.log(data)
      this.props.actions.create_client_profile(data);
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
                  value={this.state.name.toUpperCase()}
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
            <FileUpload type={'image'} handleChange={this.handleChange} name={this.state.name} image={this.state.image}/>
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
            <FileUpload type={'pressKit'} handleChange={this.handleChange} name={this.state.name} pressKit={this.state.pressKit}/>
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
            <Link to="/admin"><button styleName={'styled-button'} onClick={this.handleSave}>SAVE</button></Link>
          </div>
        </Paper>
      </div>
    );
  }
}

function map_state_to_props(state, ownProps){
  return {
     all_artists: state.clientReducer.all_artists,
     image_url: state.adminReducer.image_url,
     pressKit_url: state.adminReducer.pdf_url
  }
}

function map_dispatch_to_props(dispatch){
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(map_state_to_props, map_dispatch_to_props)(ClientEdit);
