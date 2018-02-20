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
  render() {
    const storyList = Data.stories.map(story => <SingleClientNews story={story} />);
    return (
      <div stlyeName={'container'}>
        <div styleName={'page-content'}>
          <FooterBlock type='client' clientName='PETE TONG' />
          <div stlyeName={'artist-content'}>
            <div styleName={'stuff'}>
              <TopBlock data={Data.clients[0]}/>
              <SocialBlock />
              <BioBlock text={Data.text}/>
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
      artist_info: state.clientReducer.artist_info
  }
}

function map_dispatch_to_props(dispatch){
  return { action: bindActionCreators(actions, dispatch)}
}

export default connect(map_state_to_props, map_dispatch_to_props)(ClientPage);

