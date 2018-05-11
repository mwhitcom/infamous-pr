import React, { Component } from 'react';
import { Paper, TextField, DatePicker, SelectField, MenuItem, Checkbox } from 'material-ui';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux'
import moment from 'moment';

import { createNews, updateNews, fetchSingleNews, clearSingleNews } from '../../../actions/newsActions';
import { fetchClient } from '../../../actions/clientActions';
import { unloadFile } from '../../../actions/fileActions';
import { postTweet } from '../../../actions/socialActions';

import './newsEdit.css';
import FileUpload from '../fileUpload/FileUpload';

class NewsEdit extends Component {
  constructor(props) {
    super(props);
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

  componentDidMount() {
    window.scrollTo(0,0);
    const { fetchSingleNews, fetchClient} = this.props;
    const id = this.props.match.params.id;
    console.log(id)
    const token = sessionStorage.getItem('token');
    !token && this.props.push('/login');
    fetchClient()
    fetchSingleNews(id);
  }

  componentDidUpdate() {
    const { imageURL } = this.props;
    const { imageLoad, image } = this.state
    if(!imageLoad && imageURL !== image && Object.keys(imageURL).length !== 0) {
      this.setState({ image: imageURL, imageLoad: true });
    }
    this.handleLoad();
  }

  componentWillUnmount() {
    const { unloadFile, clearSingleNews } = this.props;
    this.setState({ loaded: false, imageLoad: false });
    unloadFile();
    clearSingleNews();
  }

  handleLoad = () => {
    const { news } = this.props;
    const { loaded } = this.state;
    if(Object.keys(news).length && !loaded){
      const { data } = news;

      data.social = data.social.replace(/~/g, '&').replace(/!/g, '%');
      data.loadedSocial = data.social.replace(/~/g, '&').replace(/!/g, '%');
      data.image = data.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')
      data.news_link = data.news_link.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%');
      data.title = data.title.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%');
      data.news_dek = data.news_dek.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%');

      this.setState({ ...data, loaded: true, id: news.id});
    }
  }

  handleSave = () => {
    const { createNews, updateNews, postTweet } = this.props;
    const { social, loadedSocial } = this.state;
    const id = this.props.match.params.id;
    const data = this.state;
    delete data.loaded;
    delete data.isSaved;
    delete data.imageLoad;

    if(data.twitterChecked && social !== loadedSocial) {
      delete data.loadedSocial;
      postTweet({ copy: data.social, link: data.news_link });
    }

    if(id) {
      delete data.loadedSocial;
      updateNews(data);
    } else {
      delete data.id;
      delete data.loadedSocial;
      createNews(data);
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleDate = (event, date) => {
    this.setState({ date: moment(date).format('MMMM DD, YYYY').toString() });
  }

  handleDropdown = (event, index, value) => {
    this.setState({ client: value });
  }

  handleTwitterCheck = () => {
    this.setState({ twitterChecked: !this.state.twitterChecked });
  }

  renderClientOptions = () => {
    const { clients } = this.props;
    return clients.map((client, index) => {
      return (
        <MenuItem 
          key={index+1} 
          value={client.data.name} 
          primaryText={client.data.name} 
        />
      );
    })
  }

  render() {
    const style = {
      display: !this.state.twitterChecked ? 'none' : 'inline-block'
    }

    return (
      <div styleName="container">
        <Paper styleName="content-container" zDepth={3}>
          <h1 styleName="title">NEWS</h1>
          <div>
            <ul styleName="top-list">
              <li>
                <TextField
                  id="outlet"
                  floatingLabelText="Outlet"
                  value={this.state.outlet}
                  onChange={this.handleChange}
                  fullWidth={true}
                />
              </li>
              <li>
                <DatePicker
                  hintText="Article Publish Date"
                  value={moment(this.state.date, 'MMMM DD, YYYY').toDate()}
                  onChange={this.handleDate}
                  fullWidth={true}
                  styleName="date-input"
                  formatDate={(date) => moment(date).format('MMMM DD, YYYY')}
                />
              </li>
              <li>
                <SelectField
                  value={this.state.client}
                  onChange={this.handleDropdown}
                  floatingLabelText="Select Client"
                  fullWidth={true}
                >
                  {this.renderClientOptions()}
                </SelectField>
              </li>
            </ul>
            <TextField
              id="news_link"
              floatingLabelText="Article URL"
              value={this.state.news_link}
              onChange={this.handleChange}
              fullWidth={true}
            />
            <FileUpload 
              type={'image'} 
              name={this.state.outlet} 
              image={this.state.image} 
              handleChange={this.handleChange}
            />
            <TextField
              id="title"
              floatingLabelText="Title"
              value={this.state.title}
              onChange={this.handleChange}
              fullWidth={true}
              multiLine={true}
              rows={2}
            />
            <TextField
              id="news_dek"
              floatingLabelText="Dek / Subtext"
              value={this.state.news_dek}
              onChange={this.handleChange}
              fullWidth={true}
              multiLine={true}
              rows={3}
            />
            <Checkbox
              label="Post to Twitter"
              checked={this.state.twitterChecked}
              onCheck={this.handleTwitterCheck}
            />
            <TextField
              id="social"
              floatingLabelText="Social Copy"
              value={this.state.social}
              onChange={this.handleChange}
              fullWidth={true}
              style={style}
            />
            <Link to="/admin">
              <button styleName="save-button" onClick={this.handleSave}>SAVE</button>
            </Link>
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.singleNews,
  clients: state.clients,
  imageURL: state.upload.image,
  fileURL: state.upload.file
});

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

export default connect(mapStateToProps, mapDispatchToProps)(NewsEdit);
