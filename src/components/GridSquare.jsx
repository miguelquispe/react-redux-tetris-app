import React from 'react'

export const GridSquare = (props) => {
  const classes = `grid-square color-${props.color}`;
  return <div className={classes} />
}
