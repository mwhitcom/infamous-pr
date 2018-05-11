import React, { Component } from 'react';
import { Paper, TextField, SelectField, MenuItem } from 'material-ui';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux'

import { unloadFile } from '../../../actions/fileActions';
import { createClient, updateClient, fetchSingleClient, clearSingleClient } from '../../../actions/clientActions';

import './clientEdit.css';
import FileUpload from '../fileUpload/FileUpload';

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
      active: 'Active',
      id: '',
      loaded: false,
      imageLoad: false,
      pressLoad: false,
    }
  }

  componentDidMount() {
    window.scrollTo(0,0);
    const { fetchSingleClient } = this.props
    const token = sessionStorage.getItem('token');
    !token && this.props.push('/login');
    const name = this.props.match.params.client;
    fetchSingleClient(name)
  }

  componentDidUpdate() {
    const { imageURL, fileURL } = this.props;
    const { imageLoad, image, pressLoad, pressKit } = this.state;
    if(!imageLoad && imageURL !== image && Object.keys(imageURL).length !== 0) {
      this.setState({ image: imageURL, imageLoad: true });
    }
    if(!pressLoad && fileURL !== pressKit && Object.keys(fileURL).length !== 0) {
      this.setState({ pressKit: fileURL, pressLoad: true });
    }
    this.handleLoad();
  }

  componentWillUnmount() {
    const { unloadFile, clearSingleClient } = this.props;
    this.setState({ loaded: false, imageLoad: false, pressLoad: false });
    unloadFile();
    clearSingleClient();
  }

  handleLoad = () => {
    const { loaded } = this.state;
    const { client } = this.props;
    if(Object.keys(client).length && !loaded){
      const { data, id } = client
      data.bio = data.bio.replace(/~/g, '\n').replace(/@/g, '&');
      // data.bio = data.bio.replace(/~/g, '\n')

      data.image = data.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')
      data.pressKit = data.pressKit.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')
      data.facebook = data.facebook.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%');
      data.twitter = data.twitter.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%');
      data.instagram = data.instagram.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%');
      data.youtube = data.youtube.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%');
      data.soundcloud = data.soundcloud.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%');
      data.website = data.website.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%');
      data.type = data.type.replace(/~/g, '&');

      this.setState({ ...data, loaded: true, id });
    }
  }

  handleSave = () => {
    const { createClient, updateClient } = this.props
    const name = this.props.match.params.client;
    const data = this.state;
    
    delete data.loaded;
    delete data.imageLoad;
    delete data.pressLoad;
    data.bio = data.bio.replace(/\r\n|\r|\n/g, '~')
    data.name = data.name.toUpperCase();

    name ? updateClient(data) : createClient(data);
  }

  handleChange = (event) => {
    event.target.id === 'name'
      ? this.setState({ [event.target.id]: event.target.value.toUpperCase() })
      : this.setState({ [event.target.id]: event.target.value });
  }

  handleTypeDropdown = (event, index, value) => {
    this.setState({ type: value.toLowerCase() });
  }

  handleStatusDropdown = (event, index, value) => {
    this.setState({ active: value });
  }

  render() {
    const types = ['artists', 'labels', 'festivals & events', 'brands', 'technology', 'film & tv'];
    const items = types.map((type, index) => {
      return (
        <MenuItem 
          key={index+1} 
          value={type.toUpperCase()} 
          primaryText={type.toUpperCase()} 
        />
      );
    });

    return (
      <div styleName="container">
        <Paper styleName="content-container" zDepth={3}>
          <h1 styleName="title">CLIENT</h1>
          <div>
            <ul styleName="top-list">
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
                  onChange={this.handleTypeDropdown}
                  floatingLabelText="Select Type"
                  fullWidth={true}
                  id="type"
                >
                  {items}
                </SelectField>
              </li>
              <li>
                <SelectField
                  value={this.state.active.toUpperCase()}
                  onChange={this.handleStatusDropdown}
                  floatingLabelText="Client Status"
                  fullWidth={true}
                  id="active"
                >
                  <MenuItem value='ACTIVE' primaryText='ACTIVE' />
                  <MenuItem value='HIDDEN' primaryText='HIDDEN' />
                </SelectField>
              </li>
            </ul>
            <FileUpload 
              type={'image'} 
              uploadType={'client'} 
              handleChange={this.handleChange} 
              name={this.state.name} 
              image={this.state.image} 
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
            <FileUpload 
              type={'pressKit'} 
              handleChange={this.handleChange} 
              name={this.state.name} 
              pressKit={this.state.pressKit}
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
            <Link to="/admin">
              <button styleName="styled-button" onClick={this.handleSave}>SAVE</button>
            </Link>
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  client: state.singleClient,
  imageURL: state.upload.image,
  fileURL: state.upload.file
});

const mapDispatchToProps = {
  push,
  unloadFile,
  createClient,
  updateClient,
  fetchSingleClient,
  clearSingleClient
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientEdit);
