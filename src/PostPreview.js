import React from 'react'
import './PostPreview.scss'

export function PostPreview(props) {
  return (
    <div
      className={`post-preview ${props.size} ${props.style}`}
      style={{
        backgroundImage: `url(${props.backgroundImage})`
      }}
    >
      {props.title ? <h3 className="title">{props.title}</h3> : null}
    </div>
  )
}
