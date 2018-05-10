import React from 'react';

import './topBlock.css';

const TopBlock = (props) => {
  const { data } = props;
  const image = data && data.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F');

  return (
    <div styleName="image-container">
      <h1 styleName="client-title">{data.name}</h1>
      <img src={image} alt={data.name}/>
    </div>
  );
}

export default TopBlock;
