import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LinearProgress } from 'material-ui';
import { Helmet } from 'react-helmet';
import moment from 'moment';

import * as newsActionCreators from '../../actions/newsActions';
import * as clientActionCreators from '../../actions/clientActions';

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

  componentWillMount() {
    const { news, clients, clientActions, newsActions } = this.props;
    newsActions.fetchAllNews();
    clientActions.fetchAllClients();
    window.scrollTo(0,0);
    const clientId = this.props.location.hash.replace(/#/g, '');
    this.setState({ clientId });
  }

  render() {
    const { news, clients } = this.props;
    const [client] = clients.filter(client => client.id === this.state.clientId);
    const loading = () => {
      if (!clients || !news || Object.keys(clients).length === 0 || Object.keys(news).length === 0){
        return (
          <div>
            <LinearProgress mode="indeterminate" />
          </div>
        );
      } else {
        const stories = news.filter(story => story.data.client === client.data.name);
        stories.sort ((a, b) => {
          return moment(a.data.date, 'MMMM DD, YYYY').toDate() - moment(b.data.date, 'MMMM DD, YYYY').toDate();
        });
        const storyList = stories.reverse().map(story => <SingleClientNews story={story} />);
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
          {/* <Navbar type='client' clientName={client ? client.data.name.toUpperCase() : ''} /> */}
          <Navbar />
          {loading()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news,
    clients: state.clients
  };
};

const mapDispatchToProps = dispatch => ({
  newsActions: bindActionCreators(newsActionCreators, dispatch),
  clientActions: bindActionCreators(clientActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientPage);

