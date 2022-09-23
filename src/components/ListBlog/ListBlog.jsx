import React from 'react'
import { LinkCustom } from '../LinkCustom/LinkCustom/'

import classes from './styles.module.css'

export const ListBlog = (props) => {
  const {
    className,
    blogs,
    ...otherProps
  } = props

  return (
    <>
      {blogs && blogs.map((blog) =>
      (
        <div className={`${classes.root}${className ? ` ${className}` : ''}`}
          key={blog.id}
          {...otherProps}
        >
          <LinkCustom link={`/blogs/${blog.id}`}>
            <p className={classes.title}> {blog.title}</p>
            <p>Artykuł napisał: {blog.author}</p>
          </LinkCustom>
        </div>
      ))}
    </>
  )
}
export default ListBlog
