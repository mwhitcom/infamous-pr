import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardMedia, CardTitle, FlatButton, Dialog } from 'material-ui'
import { connect } from 'react-redux'

import { deleteClient } from '../../../../actions/clientActions'
import './singleClient.css'

class SingleClient extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleDelete = () => {
    const { deleteClient } = this.props
    const { id } = this.props.client
    deleteClient(id)
    this.setState({ open: false })
  }

  render () {
    const { image, name, active } = this.props.client.data
    let imageURL = image
    imageURL = imageURL.split('&')
    imageURL = imageURL[0].split('%2F')
    imageURL = `${imageURL[0]}%2Fthumb_${imageURL[1]}`

    const actions = [
      <FlatButton
        label="CANCEL"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label="CONFIRM"
        primary
        keyboardFocused
        onClick={this.handleDelete}
      />
    ]

    return (
      <Card styleName="container">
        <Dialog
          title="Confirm Delete"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Are you sure you want to delete this client?
        </Dialog>
        <CardMedia
          overlay={
            <CardTitle
              title={name}
              subtitle={`Status: ${active}`}
            />
          }
        >
          <img src={imageURL} alt={name} />
        </CardMedia>
        <CardActions>
          <Link to={`/admin/client-edit/${name}`}>
            <FlatButton label="EDIT" primary />
          </Link>
          <FlatButton onClick={this.handleOpen} label="DELETE" primary />
        </CardActions>
      </Card>
    )
  }
}

const mapDispatchToProps = {
  deleteClient
}

export default connect(null, mapDispatchToProps)(SingleClient)
