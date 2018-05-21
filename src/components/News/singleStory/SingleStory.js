import React from 'react'

import './singleStory.css'

const SingleStory = (props) => {
  const style = {
    backgroundImage: `url(${props.story.image.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%2F')})`
  }
  const newsLink = props.story.news_link.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')
  const newsTitle = props.story.title.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')
  const newsDek = props.story.news_dek.replace(/@/g, '=').replace(/~/g, '&').replace(/!/g, '%')

  const limitText = (text) => {
    const characterLimit = 400
    const { length } = text.split('')
    return length >= characterLimit
      ? [...text.split('').slice(0, characterLimit), ' ...'].join('')
      : text
  }

  return (
    <a href={newsLink} styleName="story-container" target="_blank">
      <div styleName="image-container" style={style} />
      <ul styleName="content-list">
        <li styleName="date">{props.story.date} - {props.story.outlet}</li>
        <li styleName="title">{newsTitle}</li>
        <li styleName="dek">{limitText(newsDek)}</li>
      </ul>
    </a>
  )
}

export default SingleStory
