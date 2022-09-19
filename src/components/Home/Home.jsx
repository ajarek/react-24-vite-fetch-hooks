import { React, useEffect, useState } from 'react'
import { ListBlog } from '../../components/ListBlog/ListBlog'
import { WrapperLayout } from '../../components/WrapperLayout/WrapperLayout'
import { FetchData } from '../../components/FetchData/FetchData'
import { FullPageLayout } from '../../components/FullPageLayout/FullPageLayout'
import { Loading } from '../../components/Loading/Loading'
import classes from './styles.module.css'

export const Home = (props) => {
  const {
    className,
    ...otherProps
  } = props
  const [blogs, setBlogs] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    // npx json-server --watch src/assets/data/data.json --port 8000
    const url = 'http://localhost:8000/blogs'
    setTimeout(() => {
      FetchData(url)
      .then((data) => setBlogs(data))
      .catch((err) => {
        console.error('Error:', err)
      })
      .finally(() => setPending(false))
    }, "2000")
  }, []);

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

      {pending ?
        <FullPageLayout>
          <Loading />
        </FullPageLayout>
        : null} 
        <ListBlog
          blogs={blogs}
        />
      
    </div>
  )
 
}
export default Home
