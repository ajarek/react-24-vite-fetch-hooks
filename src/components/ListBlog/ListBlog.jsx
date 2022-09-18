import React from 'react'

import classes from './styles.module.css'

export const ListBlog = (props) => {
  const {
    className,
    blogs,
    ...otherProps
  } = props

  return (
    <>
 {blogs && blogs.map((blog)=>
     (
     <div  className={`${classes.root}${className ? ` ${className}` : ''}`}
      key={blog.id}
      {...otherProps}
     >
     <p className={classes.title}> {blog.title}</p>
     <p>Artykuł napisał: {blog.author}</p>
      </div>
      ))}
    </>
  )
}
export default ListBlog
