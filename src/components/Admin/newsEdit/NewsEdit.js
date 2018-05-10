import React, { Component } from 'react';
import { Paper, TextField, DatePicker, SelectField, MenuItem, Checkbox } from 'material-ui';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux'
import moment from 'moment';

import { createNews, updateNews } from '../../../actions/newsActions';
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
      facebookChecked: false,
      twitterChecked: false,
      loaded: false,
      isSaved: false,
      imageLoad: false,
      saveText: 'SAVE'
    }
  }

  componentDidMount() {
    const token = sessionStorage.getItem('token');
    !token && this.props.push('/login');
    this.handleLoad();
  }

  componentWillUnmount() {
    const { unloadFile } = this.props;
    this.setState({
      loaded: false,
      imageLoad: false
    });
    unloadFile();
  }

  handleLoad = () => {
    const { hash } = this.props.location;
    const { news } = this.props;
    if(hash !== ''){
      const id = hash.replace(/#/g, '');
      const [newsData] = news.filter(news => news.id === id)
      newsData.data.social = newsData.data.social.replace(/~/g, '&').replace(/!/g, '%');
      newsData.data.loadedSocial = newsData.data.social.replace(/~/g, '&').replace(/!/g, '%');
      newsData.data.image = newsData.data.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')
      newsData.data.news_link = newsData.data.news_link.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%');
      newsData.data.title = newsData.data.title.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%');
      newsData.data.news_dek = newsData.data.news_dek.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%');
      if(!this.state.loaded) {
        this.setState({ id, loaded: true, ...newsData.data});
      }
    }
  }

  componentDidUpdate() {
    const { imageURL } = this.props;
    if(!this.state.imageLoad && imageURL !== this.state.image && Object.keys(imageURL).length !== 0) {
      this.setState({ 
        image: imageURL,
        imageLoad: true
      });
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

  handleFacebookCheck = () => {
    this.setState((oldState) => {
      return { facebookChecked: !oldState.facebookChecked };
    });
  }

  handleTwitterCheck = () => {
    this.setState((oldState) => {
      return { twitterChecked: !oldState.twitterChecked };
    });
  }

  handleSave = () => {
    const { hash } = this.props.location;
    const { createNews, updateNews, postTweet } = this.props;
    const data = this.state;
    delete data.loaded;
    delete data.saveText;
    delete data.isSaved;
    delete data.imageLoad;
    data.social = data.social.replace(/&/g, '~').replace(/%/g, '!');
    data.loadedSocial = data.loadedSocial.replace(/&/g, '~').replace(/%/g, '!');
    data.image = data.image.replace(/=/g, '@').replace(/&/g, '~').replace(/%2F/g, '!');
    data.title = data.title.replace(/=/g, '@').replace(/&/g, '~').replace(/%/g, '!');
    data.news_link = data.news_link.replace(/=/g, '@').replace(/&/g, '~').replace(/%/g, '!');
    data.news_dek = data.news_dek.replace(/=/g, '@').replace(/&/g, '~').replace(/%/g, '!');
    if(data.twitterChecked && this.state.social !== this.state.loadedSocial) {
      delete data.loadedSocial;
      postTweet({
        copy: data.social,
        link: data.news_link
      });
    }
    if(hash !== '') {
      delete data.loadedSocial;
      updateNews(data);
    } else {
      delete data.id;
      delete data.loadedSocial;
      createNews(data);
    }
  }

  render() {
    const { clients } = this.props;
    const items = clients.map((client, index) => {
      return (
        <MenuItem key={index+1} value={client.data.name} primaryText={client.data.name} />
      );
    })

    const style = {
      display: !this.state.facebookChecked && !this.state.twitterChecked ? 'none' : 'inline-block'
    }

    return (
      <div styleName={'container'}>
        <Paper styleName={'content-container'} zDepth={3}>
          <h1 styleName={'title'}>NEWS</h1>
          <div>
            <ul styleName={'top-list'}>
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
                  styleName={'date-input'}
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
                  {items}
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
            <FileUpload type={'image'} name={this.state.outlet} image={this.state.image} handleChange={this.handleChange}/>
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
            {/* <Checkbox
              label="Post to Facebook"
              checked={this.state.facebookChecked}
              onCheck={this.handleFacebookCheck}
            /> */}
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
              <button styleName={'save-button'} onClick={this.handleSave}>{this.state.saveText}</button>
            </Link>
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news,
  clients: state.clients,
  imageURL: state.upload.image,
  fileURL: state.upload.file
});

const mapDispatchToProps = {
  push,
  unloadFile,
  createNews,
  updateNews,
  postTweet
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsEdit);
