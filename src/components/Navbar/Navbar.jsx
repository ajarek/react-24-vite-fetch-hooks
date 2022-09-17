import React from 'react'
import { List } from '../List/List/'
import classes from './styles.module.css'

export const Navbar = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <h2
        className={classes.title}
      >The Political Blog
      </h2>
      <List />


    </div>
  )
}
export default Navbar
