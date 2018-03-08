import React, { Component } from 'react';
import { Paper, TextField, DatePicker, SelectField, MenuItem, RaisedButton } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as fileActionCreators from '../../actions/fileActions';

import './FileUpload.css';

class FileUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      inputLogic: '',
      label: ''
    }
  }
  componentWillMount() {
    const { image, pressKit } = this.props
    this.setState({ image });
    pressKit ? this.setState({ pressKit }) : '';
  }

  onFormSubmit = (e) => {
    const { fileActions, name } = this.props;
    e.preventDefault()
    this.state.file ? fileActions.uploadFile(this.state.file, name.toUpperCase(), e.target.id) : '';
    this.state.file ? this.setState({ inputLogic: 'show' }) : ''
  }

  onFileChange = (e) => {
    this.setState({ file: e.target.files[0] })
  }

  handleInputLogic = (e) => {
    this.setState({ inputLogic: e.target.id });
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  uploadInput = () => {
    const { label, inputLogic, file } = this.state;
    const { type } = this.props;
    label === '' ? this.setState({ label: type === 'image' ? 'Image' : 'Press Kit' }) : '';
    if (inputLogic === 'upload') {
      return(
        <form id={type} onSubmit={this.onFormSubmit}>
          <label styleName={'styled-button label'} for="fileinput">
            Choose File
            <input type="file" id="fileinput"  onChange={this.onFileChange} />
          </label>
          <button styleName={'styled-button'} type="submit">Upload</button>
          <span styleName={'file-name'}>{file ? file.name : ''}</span>
        </form>
      )
    } else if (inputLogic === 'url' || inputLogic === 'show') {
      return( 
        <TextField
          id={type}
          floatingLabelText={`${label} URL`}
          value={this.props[type]}
          onChange={this.props.handleChange}
          fullWidth={true}
        />
      );
    } else {
      return(
        <div>
          <span>Either</span>
          <button styleName={'styled-button choice'} onClick={this.handleInputLogic} id="upload">{`Upload ${label}`}</button>
          <span>or</span>
          <button styleName={'styled-button choice'} onClick={this.handleInputLogic} id="url">{`Enter ${label} URL`}</button>
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

// function map_state_to_props(state, ownProps){
//   return {
//      image_url: state.file,
//      pressKit_url: state.file
//   }
// }

// function map_dispatch_to_props(dispatch){
//   return { actions: bindActionCreators(actionCreators, dispatch) };
// }

// export default connect(map_state_to_props, map_dispatch_to_props)(FileUpload);

const mapDispatchToProps = dispatch => ({
  fileActions: bindActionCreators(fileActionCreators, dispatch)
});

export default connect(null, mapDispatchToProps)(FileUpload);
