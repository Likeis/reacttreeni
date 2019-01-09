import React from 'react'

export function GridElement(props) {
  const elementWidth = () => {
    if (props.gridAreaId === 'info') {
      return '332px'
    } else {
      return '245px'
    }
  }

  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        gridArea: props.gridAreaId,
        width: elementWidth()
      }}
    >
      {props.children}
    </div>
  )
}
