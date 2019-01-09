import React from 'react'

export function GridParent(props) {
  return (
    <div
      className="GridParent"
      style={{
        display: `grid`,
        gridGap: '0.8rem',
        gridTemplateColumns: `1fr 1fr 2fr`,
        gridTemplateRows: `1fr 1fr 1fr 1fr`,
        gridTemplateAreas: `
            'post-preview-small-1 post-preview-wide-1 info'
            'post-preview-small-1 post-preview-wide-1 info'
            'post-preview-small-2 post-preview-wide-1 info'
            'post-preview-small-2 misc info' 
            `
      }}
    >
      {props.children}
    </div>
  )
}
