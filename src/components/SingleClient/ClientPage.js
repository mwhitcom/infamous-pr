import React, { Component } from 'react';
<<<<<<< HEAD
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
=======
>>>>>>> ce2299a072be086d14015624bba59da7ddd51a2f

import './ClientPage.css';
import Data from '../../utils/FillerData';
import FooterBlock from '../Landing_News/FooterBlock';
import SingleClientNews from './SingleClientNews';
import ImageBlock from './ImageBlock';
import BioBlock from './BioBlock';

class ClientPage extends Component {
  render() {
    const storyList = Data.stories.map(story => <SingleClientNews story={story} />);
    return (
      <div stlyeName={'container'}>
        <div styleName={'page-content'}>
          <FooterBlock type='client' clientName='PETE TONG' />
          <div styleName={'client-content'}>
            <div styleName={'info-block'}>
              <ImageBlock client={Data.clients} />
              <BioBlock text={Data.text} />
            </div>
            <div styleName={'story-block'}>
              {storyList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD
function map_sate_to_props(state, ownProps){
  return {
      artist_info: state.client_reducer.artist_info
  }
}

function map_dispatch_to_props(dispatch){
  return { action: bindActionCreators(actions, dispatch)}
}

export default connect(map_state_to_props, map_dispatch_to_props)(ClientPage);

=======
export default ClientPage;
>>>>>>> ce2299a072be086d14015624bba59da7ddd51a2f
