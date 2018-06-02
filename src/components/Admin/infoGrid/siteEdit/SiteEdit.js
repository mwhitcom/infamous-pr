import React, { Component } from 'react'
import { Button, TextField, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import { updateInfo } from '../../../../actions/infoActions'

import './siteEdit.css'

const styles = theme => ({
  root: {
    width: '100%',
    padding: 30
  },
  button: {
    width: '25%'
  },
  textField: {
    width: '100%'
  }
})

class SiteInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      about: '',
      services: '',
      street: '',
      city: '',
      zipcode: '',
      email: '',
      loaded: false,
      mode: true
    }
  }

  componentDidMount () {
    this.handleLoad()
  }

  componentDidUpdate () {
    this.handleLoad()
  }

  componentWillUnmount () {
    this.setState({ loaded: false })
  }

  handleLoad = () => {
    const { info } = this.props
    if (info.services && this.state.loaded === false) {
      info.services = info.services.replace(/~/g, '\n').replace(/@/g, '&')
      info.about = info.about.replace(/~/g, '\n').replace(/@/g, '&')
      this.setState({ ...this.props.info, loaded: true })
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleClick = () => {
    this.setState({ mode: !this.state.mode })
  }

  handleSave = () => {
    const { updateInfo } = this.props
    const data = this.state
    this.setState({ mode: !this.state.mode })
    delete data.loaded
    delete data.mode
    data.services = data.services.replace(/\r\n|\r|\n/g, '~')
    data.about = data.about.replace(/\r\n|\r|\n/g, '~')
    updateInfo(data)
  }

  render () {
    const { classes } = this.props
    const buttonText = this.state.mode ? 'EDIT' : 'SAVE'
    const handleSwap = this.state.mode ? this.handleClick : this.handleSave
    return (
      <div styleName="container">
        <Paper className={classes.root} elevation={4} >
          <Button variant="raised" color="primary" className={classes.button} onClick={handleSwap}>
            {buttonText}
          </Button>
          <TextField
            className={classes.textField}
            id="about"
            label="About"
            value={this.state.about.replace(/~/g, '\n').replace(/@/g, '&')}
            onChange={this.handleChange}
            multiline
            disabled={this.state.mode}
            margin="normal"
          />
          <TextField
            className={classes.textField}
            id="services"
            label="Services"
            value={this.state.services.replace(/~/g, '\n').replace(/@/g, '&')}
            onChange={this.handleChange}
            multiline
            disabled={this.state.mode}
            margin="normal"
          />
          <TextField
            className={classes.textField}
            id="street"
            label="Street"
            value={this.state.street}
            onChange={this.handleChange}
            disabled={this.state.mode}
            margin="normal"
          />
          <TextField
            className={classes.textField}
            id="city"
            label="City, State"
            value={this.state.city}
            onChange={this.handleChange}
            disabled={this.state.mode}
            margin="normal"
          />
          <TextField
            className={classes.textField}
            id="zipcode"
            label="Zipcode"
            value={this.state.zipcode}
            onChange={this.handleChange}
            disabled={this.state.mode}
            margin="normal"
          />
          <TextField
            className={classes.textField}
            id="email"
            label="Contact Email"
            value={this.state.email}
            onChange={this.handleChange}
            disabled={this.state.mode}
            margin="normal"
          />
        </Paper>
      </div>
    )
  }
}

const mapDispatchToProps = {
  updateInfo
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(SiteInfo))
