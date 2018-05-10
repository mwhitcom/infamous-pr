import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { connect } from 'react-redux';

import { uploadImage, uploadFile } from '../../../actions/fileActions';
import './fileUpload.css';

class FileUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      inputLogic: '',
      label: ''
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    const { uploadFile, uploadImage, name } = this.props;
    const { file } = this.state;
    const data = {
      file,
      name: name.toUpperCase()
    }
    if(file){
      event.target.id === 'image' ? uploadImage(data) : uploadFile(data);
      file && this.setState({ inputLogic: 'show' });
    }
  }

  onFileChange = (event) => {
    this.setState({ file: event.target.files[0] })
  }

  handleInputLogic = (event) => {
    this.setState({ inputLogic: event.target.id });
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  uploadInput = () => {
    const { label, inputLogic, file } = this.state;
    const { type, uploadType } = this.props;
    label === '' && this.setState({ label: type === 'image' ? 'Image' : 'Press Kit' });
    if (inputLogic === 'upload') {
      return(
        <form id={type} onSubmit={this.onFormSubmit}>
          <label styleName="styled-button label" htmlFor="fileinput">
            Choose File
            <input type="file" id="fileinput"  onChange={this.onFileChange} />
          </label>
          <button styleName="styled-button" type="submit">Upload</button>
          <span styleName="file-name">{file ? file.name : ''}</span>
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
      if(uploadType === 'client') {
        return (
          <div>
            <button 
              styleName="styled-button choice" 
              onClick={this.handleInputLogic} 
              id="upload"
            >
              {`Upload ${label}`}
            </button>
          </div>
        );
      }
      return(
        <div>
          <span>Either</span>
          <button 
            styleName="styled-button choice" 
            onClick={this.handleInputLogic} 
            id="upload"
          >
            {`Upload ${label}`}
          </button>
          <span>or</span>
          <button 
            styleName="styled-button choice" 
            onClick={this.handleInputLogic} 
            id="url"
          >
            {`Enter ${label} URL`}
          </button>
        </div>
      )
    }
  }

  render() {
    return(
      <div styleName="select-box">
        {this.uploadInput()}
      </div>
    );
  }
}

const mapDispatchToProps = {
  uploadImage,
  uploadFile
}

export default connect(null, mapDispatchToProps)(FileUpload);
