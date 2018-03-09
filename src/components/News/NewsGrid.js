import React from 'react';
import moment from 'moment';

import './NewsGrid.css';
import SingleStory from './SingleStory';
import NewsControl from './NewsControl';

export default function NewsGrid(props) {
  props.stories.sort ((a, b) => {
    return moment(a.data.date, 'MMMM DD, YYYY').toDate() - moment(b.data.date, 'MMMM DD, YYYY').toDate();
  });
  const storyList = props.stories.reverse().map(story => <SingleStory story={story.data} />);
  return (
    <div styleName={'container'}>
      {storyList}
      <NewsControl />
    </div>
  );
}
