import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import './ClientPage.css';
import Data from '../../utils/FillerData';
import FooterBlock from '../Landing_News/FooterBlock';
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
    this.props.actions.fetch_single_artist(artistName);
    this.props.actions.fetch_artist_news(artistName);
  }

  render() {
    const stories = this.props.single_news && this.props.single_news.data[0].client === this.state.artistName 
      ? this.props.single_news 
      : {data:[]};

    const info = this.props.single_artist && this.props.single_artist.data.name === this.state.artistName  
      ? this.props.single_artist.data 
      : this.state;

    const storyList = stories.data.map(story => <SingleClientNews story={story} />);

    return (
      <div stlyeName={'container'}>
        <div styleName={'page-content'}>
          <FooterBlock type='client' clientName={this.state.artistName} />
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
      </div>
    );
  }
}

function map_state_to_props(state, ownProps){
  return {
      single_artist: state.clientReducer.artist_info,
      single_news: state.clientReducer.artist_news
  }
}

function map_dispatch_to_props(dispatch){
  return { actions: bindActionCreators(actions, dispatch)}
}

export default connect(map_state_to_props, map_dispatch_to_props)(ClientPage);
