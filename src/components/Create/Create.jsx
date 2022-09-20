import React from 'react'
import {FullPageLayout} from '../FullPageLayout/FullPageLayout'
import {useFetch} from '../useFetch/useFetch'
import {Loading} from '../Loading/Loading/'
import classes from './styles.module.css'

export const Create = (props) => {
  const {
    className,
    ...otherProps
  } = props
  const {
    data: blogs,
    pending,
    error,
  } = useFetch("http://localhost:8000/blogs")
  return (
    
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {pending ? (
        <FullPageLayout>
          <Loading />
        </FullPageLayout>
      ) : null}
       <h2>Add a New Blog</h2>
    </div>
  )
}
export default Create
