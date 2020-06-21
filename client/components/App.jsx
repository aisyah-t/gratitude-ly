import React from 'react'
import Home from './Home'
import Prompts from './Prompts'
import { HashRouter as Router, Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
    {/* <div className="rows"> */}
    <Route exact path="/" component={Home}/>
    <Route exact path="/prompts" component={Prompts}/>
    {/* </div> */}
    </Router>
  )
}

export default App