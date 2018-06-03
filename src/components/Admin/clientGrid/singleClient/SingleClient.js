import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'

import { deleteClient } from '../../../../actions/clientActions'
import './singleClient.css'

const styles = {
  card: {
    width: '100%',
    marginBottom: 20
  },
  media: {
    width: '100%',
    height: 300
  }
}

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
    const { classes } = this.props
    let imageURL = image
    imageURL = imageURL.split('&')
    imageURL = imageURL[0].split('%2F')
    imageURL = `${imageURL[0]}%2Fthumb_${imageURL[1]}`

    return (
      <div styleName="container">
        <Card className={classes.card}>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle>
              {`Are you sure you want to delete ${name}`}
            </DialogTitle>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
              Cancel
              </Button>
              <Button onClick={this.handleDelete} color="primary" autoFocus>
              Confirm
              </Button>
            </DialogActions>
          </Dialog>
          <CardMedia
            className={classes.media}
            image={imageURL}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {name}
            </Typography>
            <Typography component="p">
              {`Status: ${active}`}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/admin/client-edit/${name}`} styleName="edit-button">
              <Button variant="raised" color="primary">
                Edit
              </Button>
            </Link>
            <Button variant="raised" color="primary" onClick={this.handleOpen}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = {
  deleteClient
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(SingleClient))
