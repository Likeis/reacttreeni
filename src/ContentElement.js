import React from 'react'
import './ContentElement.scss'

export function ContentElement(props) {
  return (
    <div className="content-element">
      <h2>{props.title}</h2>
      <span>{props.content}</span>
      <div className="button-wrapper">
        {props.button ? (
          <button onClick={props.button.url ? null : props.button.onClick}>
            {props.button.url ? (
              <a
                href={props.button.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.button.text}
              </a>
            ) : (
              <span>{props.button.text}</span>
            )}
          </button>
        ) : null}
      </div>
    </div>
  )
}
