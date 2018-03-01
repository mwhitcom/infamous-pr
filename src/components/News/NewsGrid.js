import React from 'react';

import './NewsGrid.css';
import SingleStory from './SingleStory';
import NewsControl from './NewsControl';

export default function NewsGrid(props) {
  const storyList = props.stories.map(story => <SingleStory story={story.data} />);
  return (
    <div styleName={'container'}>
      {storyList}
      <NewsControl />
    </div>
  );
}
