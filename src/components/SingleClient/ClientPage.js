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
      artistName: ''
    }
  }

  componentWillMount() {
    window.scrollTo(0,0);
    const artistName = this.props.location.hash.replace('#', '').replace('-', ' ').toUpperCase();
    this.setState({ artistName }, () => {
      !this.props.single_artist || this.state.artistName !== this.state.name 
        ? this.props.actions.fetch_single_artist(artistName) 
        : this.handleUpdate();
    });
  }

  componentDidUpdate() {
    this.handleUpdate();
  }

  handleUpdate() {
    if(this.props.single_artist && this.state.name === ''){
      let data = this.props.single_artist.data;
      this.setState({ ...data });
    }
  }

  render() {
    const storyList = Data.stories.map(story => <SingleClientNews story={story} />);
    return (
      <div stlyeName={'container'}>
        <div styleName={'page-content'}>
          <FooterBlock type='client' clientName={this.state.artistName} />
          <div stlyeName={'artist-content'}>
            <div styleName={'stuff'}>
              <TopBlock data={this.state}/>
              <SocialBlock data={this.state}/>
              <BioBlock text={this.state.bio}/>
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
      single_artist: state.clientReducer.artist_info
  }
}

function map_dispatch_to_props(dispatch){
  return { actions: bindActionCreators(actions, dispatch)}
}

export default connect(map_state_to_props, map_dispatch_to_props)(ClientPage);
