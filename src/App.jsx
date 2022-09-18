import {React ,useEffect, useState} from 'react'
import "./App.css"
import { Navbar } from './components/Navbar/Navbar'
import { ListBlog } from './components/ListBlog/ListBlog'
import { WrapperLayout } from './components/WrapperLayout/WrapperLayout'
import { FetchData } from './components/FetchData/FetchData'
// import data from './assets/data/data.json'

function App() {

  
  const [blogs, setBlogs] = useState(null);
  const [pending, setPending] = useState(true);
 
useEffect(() => {
  // npx json-server --watch src/assets/data/data.json --port 8000
const url='http://localhost:8000/blogs'
FetchData(url)
  .then((data) => setBlogs(data))
  .catch((err) => {
    console.error('Error:', err)
  })
  .finally(()=>setPending(false))
  
}, []);

  return (
    <div className="App">
     { pending?<div>Loading...</div>:null}
      <Navbar />
      <WrapperLayout
      style={{
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        overflow: 'auto',
        height:'90vh',
        width:'100%' ,
      }}
      >
      <ListBlog
      blogs={blogs}
      />
      </WrapperLayout>
    </div>
  )
}

export default App
