import React from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'

import './singleClient.css'

const SingleClient = (props) => {
  const { image, name } = props
  let imageURL = image
  imageURL = imageURL.split('&')
  imageURL = imageURL[0].split('%2F')
  imageURL = `${imageURL[0]}%2Fthumb_${imageURL[1]}`

  return (
    <Link styleName="container" to={`/client/${name}`}>
      <div styleName="image-container">
        <LazyLoad height="100%" offsetVertical={100}>
          <img src={imageURL} alt={name} />
        </LazyLoad>
      </div>
      <h2 styleName="title">{name}</h2>
    </Link>
  )
}

export default SingleClient
