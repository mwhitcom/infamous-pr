import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LinearProgress } from 'material-ui';
import * as actions from '../../actions/index';

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
      artistName: '',
    }
  }

  componentWillMount() {
    window.scrollTo(0,0);
    const artistName = this.props.location.hash.replace('#', '').replace('-', ' ').toUpperCase();
    this.setState({ artistName });
    this.props.actions.fetch_artist_news(artistName);
    !this.props.all_artists 
      ? this.props.actions.fetch_single_artist(artistName)
      : this.single(artistName);
  }

  single = (artistName) => {
    const singleArtist = this.props.all_artists.data.fullList.filter(artist => artist.name === artistName);
    this.setState({...singleArtist[0]});
  }

  render() {
    const stories = this.props.single_news || {data:[]};

    const info = this.props.single_artist && this.props.single_artist.data.name === this.state.artistName  
      ? this.props.single_artist.data 
      : this.state;

    const storyList = stories.data.map(story => <SingleClientNews story={story} />);

    const loadingContent = () => {
      if(!this.props.single_artist && !this.state.name){
        return (
          <div>
            <LinearProgress mode="indeterminate" />
          </div>
        );
      }
      return(
        <div>
          <div stlyeName={'artist-content'}>
            <div styleName={'stuff'}>
              <TopBlock data={info}/>
              <SocialBlock data={info}/>
              <BioBlock text={info.bio}/>
            </div>
          </div>
          <div styleName={'news-title'}>NEWS</div>
          <div styleName={'story-block'}>
            {storyList}
          </div>
        </div>
      ); 
    }

    return (
      <div stlyeName={'container'}>
        <div styleName={'page-content'}>
          <Navbar type='client' clientName={this.state.artistName} />
          {loadingContent()}
        </div>
      </div>
    );
  }
}

function map_state_to_props(state, ownProps){
  return {
      all_artists: state.clientReducer.all_artists,
      single_artist: state.clientReducer.artist_info,
      single_news: state.clientReducer.artist_news
  }
}

function map_dispatch_to_props(dispatch){
  return { actions: bindActionCreators(actions, dispatch)}
}

export default connect(map_state_to_props, map_dispatch_to_props)(ClientPage);
