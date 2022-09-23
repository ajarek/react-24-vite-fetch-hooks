import React from "react"
import { useParams,useHistory } from "react-router-dom"
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage"
import classes from "./styles.module.css"
import { useFetch } from "../../components/useFetch/useFetch"
import { FullPageLayout } from "../../components/FullPageLayout/FullPageLayout"
import { Loading } from "../../components/Loading/Loading"

export const BlogDetails = (props) => {
  const { className, ...otherProps } = props
  const { id } = useParams()
  const history=useHistory()
  const {
    data: blog,
    pending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id)
  const handleDelete=()=>{
    fetch("http://localhost:8000/blogs/"+blog.id,{
      method:'DELETE'
    }).then(()=>{
     history.go(-1)    
    })
  }
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      {pending ? (
        <FullPageLayout>
          <Loading />
        </FullPageLayout>
      ) : null}
      {blog && (
        <>
          <h2 className={classes.title}>{blog.title}</h2>
          <p>Artykuł napisał: {blog.author}</p>
          <img className={classes.foto} src={blog.src} alt="" />
          <div className={classes.body}>{blog.body}</div>
          <button
          onClick={handleDelete}
          >
            delete
          </button>
        </>
      )}
    </div>
  )
}
export default BlogDetails
