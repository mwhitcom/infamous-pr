import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LinearProgress } from 'material-ui';

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
    !news ? newsActions.fetchAllNews() : '';
    !clients ? clientActions.fetchAllClients() : '';
    window.scrollTo(0,0);
    const clientId = this.props.location.hash.replace(/#/g, '');
    this.setState({ clientId });
  }

  render() {
    const { news, clients } = this.props;
    const [client] = clients.filter(client => client.id === this.state.clientId);
    const stories = news.filter(story => story.data.client === client.data.name);
    const storyList = stories.map(story => <SingleClientNews story={story} />);

    const loading = () => {
      if (!this.props.clients || !this.props.news || Object.keys(clients).length === 0 || Object.keys(news).length === 0){
        return (
          <div>
            <LinearProgress mode="indeterminate" />
          </div>
        );
      } else {
        return(
          <div>
            <div stlyeName={'artist-content'}>
              <div styleName={'stuff'}>
                <TopBlock data={client ? client.data : this.state}/>
                <SocialBlock data={client ? client.data : this.state}/>
                <BioBlock text={client ? client.data : this.state}/>
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
        <div styleName={'page-content'}>
          <Navbar type='client' clientName={client ? client.data.name.toUpperCase() : ''} />
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

