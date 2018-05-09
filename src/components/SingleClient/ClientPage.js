import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import moment from 'moment';

import { fetchNews } from '../../actions/newsActions';
import { fetchClient } from '../../actions/clientActions';

import './ClientPage.css';
import Navbar from '../Navigation/Navbar';
import SingleClientNews from './SingleClientNews';
import TopBlock from './TopBlock';
import BioBlock from './BioBlock';
import SocialBlock from './SocialBlock';

class ClientPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      facebook: '',
      image: '',
      instagram: '',
      name: '',
      soundcloud: '',
      twitter: '',
      type: '',
      website: '',
      youtube: '',
      pressKit: '',
      clientId: ''
    }
  }

  componentDidMount() {
    const { fetchNews, fetchClient, news, clients } = this.props
    !news.length && fetchNews()
    !clients.length && fetchClient()
    const clientId = this.props.location.hash.replace(/#/g, '');
    this.setState({ clientId });
  }

  render() {
    const { news, clients } = this.props;
    const [client] = clients.filter(client => client.id === this.state.clientId);
    const renderContent = () => {
      if (clients.length && news.length && client) {
        const stories = news.filter(story => story.data.client === client.data.name);
        stories.sort ((a, b) => {
          return moment(a.data.date, 'MMMM DD, YYYY').toDate() - moment(b.data.date, 'MMMM DD, YYYY').toDate();
        });
        const storyList = stories.reverse().map((story, index) => <SingleClientNews story={story} key={index}/>);
        return(
          <div>
            <div stlyeName={'artist-content'}>
              <div styleName={'stuff'}>
                <TopBlock data={client.data}/>
                <SocialBlock data={client.data}/>
                <BioBlock text={client.data}/>
              </div>
            </div>
            <div styleName={'news-title'}>NEWS</div>
            <div styleName={'story-block'}>
              {storyList}
            </div>
          </div>
        ); 
      }
    }

    return (
      <div stlyeName={'container'}>
        <Helmet>
          <title>{`INFAMOUS - ${client ? client.data.name.toUpperCase() : ''}`}</title>
        </Helmet>
        <div styleName={'page-content'}>
          <Navbar />
          {renderContent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news,
  clients: state.clients
})

const mapDispatchToProps = {
  fetchNews,
  fetchClient
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientPage);
