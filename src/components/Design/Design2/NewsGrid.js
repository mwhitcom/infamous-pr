import React from 'react';

import './NewsGrid.css';
import SingleStory from './SingleStory';

export default function NewsGrid(props) {
  const storyList = props.stories.map(story => <SingleStory story={story} />);
  return (
    <div styleName={'container'}>
      {storyList}
    </div>
  );
}
