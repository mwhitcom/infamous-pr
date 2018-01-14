import React, { Component } from 'react';

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

export default ClientPage;
