import React, { Children } from 'react'

import classes from './styles.module.css'

export const List = (props) => {
  const {
    className,
    children1,
    children2,
    ...otherProps
  } = props

  return (
    <ul
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <li className={classes.li}>Home</li>
      <li className={classes.li}>New Blog</li>

    </ul>
  )
}
export default List
