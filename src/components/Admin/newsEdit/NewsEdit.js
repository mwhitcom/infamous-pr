import React, { Component } from 'react'
import { TextField, Paper, MenuItem, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import moment from 'moment'

import { createNews, updateNews, fetchSingleNews, clearSingleNews } from '../../../actions/newsActions'
import { fetchClient } from '../../../actions/clientActions'
import { unloadFile } from '../../../actions/fileActions'
import { postTweet } from '../../../actions/socialActions'

import './newsEdit.css'
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

class NewsEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: moment(new Date()).format('MMMM DD, YYYY').toString(),
      id: '',
      outlet: '',
      title: '',
      news_link: '',
      news_dek: '',
      client: '',
      image: '',
      social: '',
      loadedSocial: '',
      twitterChecked: false,
      loaded: false,
      isSaved: false,
      imageLoad: false
    }
  }

  componentDidMount () {
    window.scrollTo(0, 0)
    const { fetchSingleNews, fetchClient } = this.props
    const { id } = this.props.match.params
    const token = sessionStorage.getItem('token')
    !token && this.props.push('/login')
    fetchClient()
    id && fetchSingleNews(id)
  }

  componentDidUpdate () {
    const { imageURL } = this.props
    const { imageLoad, image } = this.state
    if (!imageLoad && imageURL !== image && Object.keys(imageURL).length !== 0) {
      this.setState({ image: imageURL, imageLoad: true })
    }
    this.handleLoad()
  }

  componentWillUnmount () {
    const { unloadFile, clearSingleNews } = this.props
    this.setState({ loaded: false, imageLoad: false })
    unloadFile()
    clearSingleNews()
  }

  handleLoad = () => {
    const { news } = this.props
    const { loaded } = this.state
    if (Object.keys(news).length && !loaded) {
      const { data } = news

      data.social = data.social.replace(/~/g, '&').replace(/!/g, '%')
      data.loadedSocial = data.social.replace(/~/g, '&').replace(/!/g, '%')
      data.image = data.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')
      data.news_link = data.news_link.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')
      data.title = data.title.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')
      data.news_dek = data.news_dek.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')

      this.setState({ ...data, loaded: true, id: news.id })
    }
  }

  handleSave = () => {
    const { createNews, updateNews, postTweet } = this.props
    const { social, loadedSocial } = this.state
    const { id } = this.props.match.params
    const data = this.state
    delete data.loaded
    delete data.isSaved
    delete data.imageLoad

    if (data.twitterChecked && social !== loadedSocial) {
      delete data.loadedSocial
      postTweet({ copy: data.social, link: data.news_link })
    }

    if (id) {
      delete data.loadedSocial
      updateNews(data)
    } else {
      delete data.id
      delete data.loadedSocial
      createNews(data)
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleDate = (event) => {
    this.setState({ date: moment(event.target.value, 'YYYY-MM-DD').format('MMMM DD, YYYY').toString() })
  }

  handleDropdown = (event) => {
    this.setState({ client: event.target.value })
  }

  handleTwitterCheck = () => {
    this.setState({ twitterChecked: !this.state.twitterChecked })
  }

  formatDate = date => date && moment(date, 'MMMM DD, YYYY').format('YYYY-MM-DD').toString()

  renderClientOptions = () => {
    const { clients } = this.props
    return clients.map((client, index) => (
      <MenuItem key={client.data.name} value={client.data.name} >
        {client.data.name}
      </MenuItem>
    ))
  }

  render () {
    const { classes } = this.props
    const {
      outlet, client, news_link, image, title, news_dek, twitterChecked, social, date
    } = this.state
    const style = {
      display: !this.state.twitterChecked ? 'none' : 'inline-block',
      width: '100%'
    }

    return (
      <div styleName="container">
        <Paper className={classes.root} elevation={4} >
          <h1 styleName="title">NEWS</h1>
          <div>
            <ul styleName="top-list">
              <li>
                <TextField
                  id="outlet"
                  label="Outlet"
                  className={classes.textField}
                  margin="normal"
                  value={outlet}
                  onChange={this.handleChange}
                />
              </li>
              <li>
                <TextField
                  id="date"
                  label="Article Publish Date"
                  type="date"
                  value={this.formatDate(date)}
                  className={classes.textField}
                  onChange={this.handleDate}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </li>
              <li>
                <TextField
                  id="client"
                  label="Select Client"
                  className={classes.textField}
                  select
                  value={client}
                  onChange={this.handleDropdown}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  margin="normal"
                >
                  {this.renderClientOptions()}
                </TextField>
              </li>
            </ul>
            <TextField
              id="news_link"
              label="Article URL"
              className={classes.textField}
              margin="normal"
              value={news_link}
              onChange={this.handleChange}
            />
            <FileUpload
              type="image"
              name={outlet}
              image={image}
              handleChange={this.handleChange}
            />
            <TextField
              id="title"
              label="Title"
              className={classes.textField}
              margin="normal"
              value={title}
              onChange={this.handleChange}
              multiline
            />
            <TextField
              id="news_dek"
              label="Dek / Subtext"
              className={classes.textField}
              margin="normal"
              value={news_dek}
              onChange={this.handleChange}
              multiline
            />
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={twitterChecked}
                    onChange={this.handleTwitterCheck}
                    value="twitterChecked"
                    color="primary"
                  />
                }
                label="Post to Twitter"
              />
            </FormGroup>
            <div style={style}>
              <TextField
                id="social"
                label="Social Copy"
                className={classes.textField}
                margin="normal"
                value={social}
                onChange={this.handleChange}
              />
            </div>
            <Link to="/admin">
              <button styleName="save-button" onClick={this.handleSave}>SAVE</button>
            </Link>
          </div>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.singleNews,
  clients: state.clients,
  imageURL: state.upload.image,
  fileURL: state.upload.file
})

const mapDispatchToProps = {
  push,
  unloadFile,
  createNews,
  updateNews,
  fetchSingleNews,
  fetchClient,
  clearSingleNews,
  postTweet
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewsEdit))
