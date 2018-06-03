import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteNews } from '../../../../actions/newsActions'

import './singleStory.css'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 20,
    height: 200
  }
})

class SingleStory extends Component {
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

  handleDeleteClick = () => {
    const { deleteNews } = this.props
    const { id } = this.props.news
    deleteNews(id)
    this.setState({ open: false })
  }

  render () {
    const { classes } = this.props
    const { date, outlet } = this.props.news.data
    let { image, title, news_dek } = this.props.news.data
    const { id } = this.props.news
    image = image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')
    title = title.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')
    news_dek = news_dek.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')

    return (
      <Paper className={classes.root} elevation={4}>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>
            Are you sure you want to delete this news story?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <p>{`${date} - ${outlet}`}</p>
              <p>{title}</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDeleteClick} color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
        <div styleName="image-container">
          <img src={image} alt={title} />
        </div>
        <div styleName="text-container">
          <h3>{`${date} - ${outlet}`}</h3>
          <h1>{title}</h1>
          <h2>{news_dek}</h2>
        </div>
        <div styleName="button-container">
          <Link to={`/admin/news-edit/${id}`}>
            <button id={id}>EDIT</button>
          </Link>
          <button id={id} onClick={this.handleOpen}>DELETE</button>
        </div>
      </Paper>
    )
  }
}

const mapDispatchToProps = {
  deleteNews
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(SingleStory))
