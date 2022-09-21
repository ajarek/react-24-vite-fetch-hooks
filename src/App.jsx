import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css"
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'
import Create from './components/Create/Create'
import BlogDetails from './components/BlogDetails/BlogDetails'

//npx json-server --watch src/assets/data/data.json --port 8000

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App