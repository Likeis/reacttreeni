import React from 'react'
import './BlogElement.scss'

export function BlogElement(props) {
  return (
    <div className="blog-wrapper">
      <h3 className="header">
        We <span style={{ color: `red`, fontSize: `2.5rem` }}>&#10084;</span>{' '}
        <br /> Open Source.
      </h3>
      <span>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has.
      </span>

      <span>The point of using Lorem Ipsum is that it has.</span>

      <a href="/">{props.content}</a>
    </div>
  )
}
