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
       <h2 className={classes.title}>Add a New Blog</h2>
       <form className={classes.form} >
        <label htmlFor="">Blog title</label>
        <input
         type="text" 
         required
         />

         <label htmlFor="">Blog body</label>
        <textarea
         type="text" 
         required>
         </textarea>

         <label htmlFor="">Blog author</label>
         <input
         type="text" 
         required
         />
         <label htmlFor="">Blog image</label>
         <input
         type="text" 
         />
         <button>Add Blog</button>
         
       </form>
    </div>
  )
}
export default Create
