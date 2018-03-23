import React, { Component } from 'react';
import { Paper, TextField, DatePicker, SelectField, MenuItem, RaisedButton } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FileUpload from './FileUpload';

import * as newsActionCreators from '../../actions/newsActions';
import * as fileActionCreators from '../../actions/fileActions';
import * as clientActionCreators from '../../actions/clientActions';

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
      active: 'Active',
      id: '',
      loaded: false,
      imageLoad: false,
      pressLoad: false,
    }
  }

  componentWillMount() {
    const token = sessionStorage.getItem('token');
    token ? '' : this.props.history.push('/login');
    this.handleLoad();
  }

  componentDidUpdate() {
    const { imageURL, fileURL } = this.props;
    if(!this.state.imageLoad && imageURL !== this.state.image && Object.keys(imageURL).length !== 0) {
      this.setState({ 
        image: imageURL,
        imageLoad: true
      });
    }
    if(!this.state.pressLoad && fileURL !== this.state.pressKit && Object.keys(fileURL).length !== 0) {
      this.setState({ 
        pressKit: fileURL,
        pressLoad: true
      });
    }
  }

  componentWillUnmount() {
    const { fileActions } = this.props;
    this.setState({
      loaded: false,
      imageLoad: false,
      pressLoad: false
    });
    fileActions.unloadFile();
  }

  handleLoad = () => {
    const { hash } = this.props.location;
    const { clients } = this.props;
    if(hash !== ''){
      const id = hash.replace(/#/g, '');
      const [clientData] = clients.filter(artist => artist.id === id)
      clientData.data.image = clientData.data.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')
      clientData.data.pressKit = clientData.data.pressKit.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')
      clientData.data.bio = clientData.data.bio.replace(/~/g, '\n').replace(/@/g, '&');
      if(clientData.data && !this.state.loaded){
        this.setState({ id, loaded: true, ...clientData.data });
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
    const { hash } = this.props.location;
    const { clientActions } = this.props
    const data = this.state;
    delete data.loaded;
    delete data.imageLoad;
    delete data.pressLoad;
    data.bio = data.bio.replace(/\r\n|\r|\n/g, '~').replace(/&/g, '@');
    data.name = data.name.toUpperCase();
    data.image = data.image.replace(/=/g, '@').replace(/&/g, '~').replace(/%2F/g, '!');
    data.pressKit = data.pressKit.replace(/=/g, '@').replace(/&/g, '~').replace(/%2F/g, '!');
    if(hash !== '') {
      clientActions.updateClientProfile(data);
    } else {
      clientActions.createClientProfile(data);
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

const mapStateToProps = state => {
  return {
    news: state.news,
    clients: state.clients,
    imageURL: state.upload.image,
    fileURL: state.upload.file
  };
};

const mapDispatchToProps = dispatch => ({
  newsActions: bindActionCreators(newsActionCreators, dispatch),
  fileActions: bindActionCreators(fileActionCreators, dispatch),
  clientActions: bindActionCreators(clientActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientEdit);
