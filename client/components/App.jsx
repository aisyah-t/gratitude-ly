import React from 'react'
import Home from './Home'
import About from './About'
import Prompts from './Prompts'
import { HashRouter as Router, Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
    <div className="container">
    <Route exact path="/" component={Home}/>
    <Route exact path="/prompts" component={About}/>
    <Route exact path="/prompts" component={Prompts}/>
    {/* <Route path="/prompts/:id" component={Prompts}/> */}
    </div>
    </Router>
  )
}

export default App