import {React ,useEffect, useState} from 'react'
import "./App.css"
import { Navbar } from './components/Navbar/Navbar'
import data from './assets/data/data.json'
const arr =[1,2,3,4,5]
function App() {

  
  const [blogs, setBlogs] = useState(null);
 
useEffect(() => {
  
  setBlogs(data.results)
  
}, []);

  return (
    <div className="App">
      <Navbar />
     {blogs && blogs.map((blog)=>(<div key={blog.id}>
     <p> {blog.title}</p>
     <p>{blog.body}</p>
     <p>Artykuł napisał: {blog.author}</p>
      </div>)
     )}
        
     
     
     
    </div>
  )
}

export default App
