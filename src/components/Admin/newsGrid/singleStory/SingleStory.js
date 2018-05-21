import React, { Component } from 'react'
import { Paper, FlatButton, Dialog } from 'material-ui'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteNews } from '../../../../actions/newsActions'

import './singleStory.css'

class SingleStory extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleClick = () => {
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
    const { date, outlet } = this.props
    let { image, title, news_dek } = this.props.news.data
    const { id } = this.props.news
    image = image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')
    title = title.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')
    news_dek = news_dek.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')

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
        onClick={this.handleDeleteClick}
      />
    ]

    return (
      <Paper styleName="container" zDepth={3}>
        <Dialog
          title="Confirm Delete"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Are you sure you want to delete this news story?
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
          <button id={id} onClick={this.handleClick}>DELETE</button>
        </div>
      </Paper>
    )
  }
}

const mapDispatchToProps = {
  deleteNews
}

export default connect(null, mapDispatchToProps)(SingleStory)
