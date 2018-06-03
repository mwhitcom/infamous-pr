import React, { Component } from 'react'
import { TextField, Paper, MenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'

import { unloadFile } from '../../../actions/fileActions'
import { createClient, updateClient, fetchSingleClient, clearSingleClient } from '../../../actions/clientActions'

import './clientEdit.css'
import FileUpload from '../fileUpload/FileUpload'

const styles = theme => ({
  root: {
    width: '100%',
    padding: 30
  },
  textField: {
    width: '100%'
  }
})

class ClientEdit extends Component {
  constructor (props) {
    super(props)
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
      active: 'ACTIVE',
      id: '',
      loaded: false,
      imageLoad: false,
      pressLoad: false
    }
  }

  componentDidMount () {
    window.scrollTo(0, 0)
    const { fetchSingleClient } = this.props
    const token = sessionStorage.getItem('token')
    !token && this.props.push('/login')
    const name = this.props.match.params.client
    fetchSingleClient(name)
  }

  componentDidUpdate () {
    const { imageURL, fileURL } = this.props
    const {
      imageLoad, image, pressLoad, pressKit
    } = this.state
    if (!imageLoad && imageURL !== image && Object.keys(imageURL).length !== 0) {
      this.setState({ image: imageURL, imageLoad: true })
    }
    if (!pressLoad && fileURL !== pressKit && Object.keys(fileURL).length !== 0) {
      this.setState({ pressKit: fileURL, pressLoad: true })
    }
    this.handleLoad()
  }

  componentWillUnmount () {
    const { unloadFile, clearSingleClient } = this.props
    this.setState({ loaded: false, imageLoad: false, pressLoad: false })
    unloadFile()
    clearSingleClient()
  }

  handleLoad = () => {
    const { loaded } = this.state
    const { client } = this.props
    if (Object.keys(client).length && !loaded) {
      const { data, id } = client
      data.bio = data.bio.replace(/~/g, '\n')
      this.setState({ ...data, loaded: true, id })
    }
  }

  handleSave = () => {
    const { createClient, updateClient } = this.props
    const name = this.props.match.params.client
    const data = this.state
    delete data.loaded
    delete data.imageLoad
    delete data.pressLoad
    data.bio = data.bio.replace(/\r\n|\r|\n/g, '~')
    data.name = data.name.toUpperCase()
    name ? updateClient(data) : createClient(data)
  }

  handleChange = (event) => {
    event.target.id === 'name'
      ? this.setState({ [event.target.id]: event.target.value.toUpperCase() })
      : this.setState({ [event.target.id]: event.target.value })
  }

  handleTypeDropdown = (event) => {
    this.setState({ type: event.target.value })
  }

  handleStatusDropdown = (event) => {
    this.setState({ active: event.target.value })
  }

  render () {
    const types = ['artists', 'labels', 'festivals & events', 'brands', 'technology', 'film & tv']
    const { classes } = this.props
    const {
      name,
      type,
      active,
      image,
      facebook,
      twitter,
      instagram,
      youtube,
      soundcloud,
      website,
      pressKit,
      bio
    } = this.state
    const items = types.map((type, index) => (
      <MenuItem key={type} value={type.toUpperCase()} >
        {type.toUpperCase()}
      </MenuItem>
    ))

    return (
      <div styleName="container">
        <Paper className={classes.root} elevation={4} >
          <h1 styleName="title">CLIENT</h1>
          <div>
            <ul styleName="top-list">
              <li>
                <TextField
                  id="name"
                  label="Name"
                  className={classes.textField}
                  margin="normal"
                  value={name.toUpperCase()}
                  onChange={this.handleChange}
                />
              </li>
              <li>
                <TextField
                  id="type"
                  label="Select Type"
                  select
                  className={classes.textField}
                  value={type.toUpperCase()}
                  onChange={this.handleTypeDropdown}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  margin="normal"
                >
                  {items}
                </TextField>
              </li>
              <li>
                <TextField
                  id="active"
                  label="Client Status"
                  select
                  className={classes.textField}
                  value={active.toUpperCase()}
                  onChange={this.handleStatusDropdown}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  margin="normal"
                >
                  <MenuItem value="ACTIVE" >ACTIVE</MenuItem>
                  <MenuItem value="HIDDEN" >HIDDEN</MenuItem>
                </TextField>
              </li>
            </ul>
            <FileUpload
              type="image"
              uploadType="client"
              handleChange={this.handleChange}
              name={name}
              image={image}
            />
            <TextField
              id="facebook"
              label="Facebook URL"
              className={classes.textField}
              margin="normal"
              value={facebook}
              onChange={this.handleChange}
            />
            <TextField
              id="twitter"
              label="Twitter URL"
              className={classes.textField}
              margin="normal"
              value={twitter}
              onChange={this.handleChange}
            />
            <TextField
              id="instagram"
              label="Instagram URL"
              className={classes.textField}
              margin="normal"
              value={instagram}
              onChange={this.handleChange}
            />
            <TextField
              id="youtube"
              label="YouTube URL"
              className={classes.textField}
              margin="normal"
              value={youtube}
              onChange={this.handleChange}
            />
            <TextField
              id="soundcloud"
              label="Soundcloud URL"
              className={classes.textField}
              margin="normal"
              value={soundcloud}
              onChange={this.handleChange}
            />
            <TextField
              id="website"
              label="Website URL"
              className={classes.textField}
              margin="normal"
              value={website}
              onChange={this.handleChange}
            />
            <FileUpload
              type="pressKit"
              handleChange={this.handleChange}
              name={name}
              pressKit={pressKit}
            />
            <TextField
              id="bio"
              label="Bio"
              className={classes.textField}
              margin="normal"
              value={bio}
              onChange={this.handleChange}
              multiline
            />
            <Link to="/admin">
              <button styleName="styled-button" onClick={this.handleSave}>SAVE</button>
            </Link>
          </div>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  client: state.singleClient,
  imageURL: state.upload.image,
  fileURL: state.upload.file
})

const mapDispatchToProps = {
  push,
  unloadFile,
  createClient,
  updateClient,
  fetchSingleClient,
  clearSingleClient
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ClientEdit))
