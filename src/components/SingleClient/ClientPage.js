import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import moment from 'moment';

import { fetchNews } from '../../actions/newsActions';
import { fetchSingleClient, clearSingleClient } from '../../actions/clientActions'

import './clientPage.css';
import Navbar from '../Navigation/navbar/Navbar';
import SingleClientNews from './singleClientNews/SingleClientNews';
import TopBlock from './topBlock/TopBlock';
import BioBlock from './bioBlock/BioBlock';
import SocialBlock from './socialBlock/SocialBlock';

class ClientPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: ''
    }
  }

  componentDidMount() {
    window.scrollTo(0,0);
    const clientId = this.props.location.hash.replace(/#/g, '');
    const { fetchNews, news, fetchSingleClient } = this.props
    fetchSingleClient(clientId);
    !news.length && fetchNews()
    this.setState({ clientId });
  }

  componentWillUnmount() {
    const { clearSingleClient } = this.props;
    clearSingleClient()
  }

  render() {
    const { news, client } = this.props;
    const renderContent = () => {
      if (news.length && Object.keys(client).length > 0) {
        const stories = news.filter(story => story.data.client === client.name);
        stories.sort ((a, b) => {
          return moment(a.data.date, 'MMMM DD, YYYY').toDate() - moment(b.data.date, 'MMMM DD, YYYY').toDate();
        });
        const storyList = stories.reverse().map((story, index) => <SingleClientNews story={story} key={index}/>);
        
        return(
          <div>
            <div>
              <div styleName="block">
                <TopBlock data={client}/>
                <SocialBlock data={client} clientId={this.state.clientId}/>
                <BioBlock text={client}/>
              </div>
            </div>
            <div styleName="news-title">NEWS</div>
            <div styleName="story-block">
              {storyList}
            </div>
          </div>
        ); 
      }
    }

    return (
      <div styleName="container">
        <Helmet>
          <title>{`INFAMOUS - ${Object.keys(client).length > 0 ? client.name : ''}`}</title>
        </Helmet>
        <div styleName="page-content">
          <Navbar />
          {renderContent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news,
  client: state.singleClient
})

const mapDispatchToProps = {
  fetchNews,
  fetchSingleClient,
  clearSingleClient
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientPage);
