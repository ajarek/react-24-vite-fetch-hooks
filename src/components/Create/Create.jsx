import { React, useState } from "react"
import{useHistory} from "react-router-dom"
import { FullPageLayout } from "../FullPageLayout/FullPageLayout"
import { Loading } from "../Loading/Loading/"
import classes from "./styles.module.css"

export const Create = (props) => {
  const { className, ...otherProps } = props
  

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("")
  const [src, setSrc] = useState("")
  const [pending, setPending] = useState(false)
  const history =useHistory()

const handleSubmit=(e)=>{
  
e.preventDefault()
const blog={title,body,author,src}
setPending(true)
fetch('http://localhost:8000/blogs/',{
  method:'POST',
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(blog)
}).then(()=>{
  setPending(false)
  // history.go(-1)
  history.push('/')
})
}

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <h2 className={classes.title}>Add a New Blog</h2>
      <form 
      className={classes.form}
      onSubmit={handleSubmit}
      >
        <label htmlFor="">Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="">Blog body</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label htmlFor="">Blog author</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="">Blog image</label>
        <input
          type="text"
          value={src}
          onChange={(e) => setSrc(e.target.value)}
        />
{ !pending && <button>Add Blog</button>}
{ pending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  )
}
export default Create
