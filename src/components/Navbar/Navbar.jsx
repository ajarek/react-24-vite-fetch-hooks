import React from 'react'
import { Link } from '../Link/Link/'
import { WrapperLayout } from '../WrapperLayout/WrapperLayout/'
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
      <h1
        className={classes.title}
      >The Political Blog
      </h1>
      <WrapperLayout>
      <Link
      link={'/'}
      >
      Home
      </Link>
      <Link
      link={'/create'}
      >
      New Blog
      </Link>
      </WrapperLayout>

    </div>
  )
}
export default Navbar
