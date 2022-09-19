import { React } from "react"
import { ListBlog } from "../../components/ListBlog/ListBlog"
import { useFetch } from "../../components/useFetch/useFetch"
import { FullPageLayout } from "../../components/FullPageLayout/FullPageLayout"
import { Loading } from "../../components/Loading/Loading"
import classes from "./styles.module.css"

export const Home = (props) => {
  const { className, ...otherProps } = props

  // npx json-server --watch src/assets/data/data.json --port 8000

  const {
    data: blogs,
    pending,
    error,
  } = useFetch("http://localhost:8000/blogs")

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      {error ? <div>{error}</div> : null}
      {pending ? (
        <FullPageLayout>
          <Loading />
        </FullPageLayout>
      ) : null}
      {blogs && <ListBlog blogs={blogs} />}
    </div>
  )
}
export default Home
