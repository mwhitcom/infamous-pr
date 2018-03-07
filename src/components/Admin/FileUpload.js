import React, { Component } from 'react';
import { Paper, TextField, DatePicker, SelectField, MenuItem, RaisedButton } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/index.js';

import './FileUpload.css';

class FileUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      inputLogic: '',
      label: '',
      pressKit: '',
      image: ''
    }
  }
  componentWillMount() {
    this.props.image ? this.setState({ image: this.props.image }) : '';
    this.props.pressKit ? this.setState({ pressKit: this.props.pressKit }) : '';
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.state.file ? this.props.actions.upload_file(this.state.file, this.props.name.toUpperCase(), e.target.id) : '';
    this.state.file ? this.setState({ inputLogic: 'show' }) : ''
  }

  onFileChange = (e) => {
    this.setState({ file: e.target.files[0] })
  }

  handleInputLogic = (e) => {
    this.setState({inputLogic: e.target.id});
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  uploadInput = () => {
    this.state.label === '' ? this.setState({ label: this.props.type === 'image' ? 'Image' : 'Press Kit' }) : '';
    if (this.state.inputLogic === 'upload') {
      return(
        <form id={this.props.type} onSubmit={this.onFormSubmit}>
          <button styleName={'styled-button choice'}>
            <label for="fileinput">Choose File</label>
          </button>
          <input type="file" id="fileinput" style={{display: 'none'}} onChange={this.onFileChange} />
          <button styleName={'styled-button'} type="submit">Upload</button>
          <span styleName={'file-name'}>{this.state.file ? this.state.file.name : ''}</span>
        </form>
      )
    } else if (this.state.inputLogic === 'url' || this.state.inputLogic === 'show') {
      return( 
        <TextField
          id={this.props.type}
          floatingLabelText={`${this.state.label} URL`}
          value={this.props[this.props.type]}
          onChange={this.props.handleChange}
          fullWidth={true}
        />
      );
    } else {
      return(
        <div>
          <span>Either</span>
          <button styleName={'styled-button choice'} onClick={this.handleInputLogic} id="upload">{`Upload ${this.state.label}`}</button>
          <span>or</span>
          <button styleName={'styled-button choice'} onClick={this.handleInputLogic} id="url">{`Enter ${this.state.label} URL`}</button>
        </div>
      )
    }
  }

  render() {
    return(
      <div styleName={'select-box'}>
        {this.uploadInput()}
      </div>
    );
  }
}

function map_state_to_props(state, ownProps){
  return {
     image_url: state.adminReducer.image_url,
     pressKit_url: state.adminReducer.pdf_url
  }
}

function map_dispatch_to_props(dispatch){
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(map_state_to_props, map_dispatch_to_props)(FileUpload);

