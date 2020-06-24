import React from 'react'
import Home from './Home'
import Prompts from './Prompts'
import ChosenPrompt from './ChosenPrompt'
import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <Route exact path="/" component={Home}/>
    <Route exact path="/prompts" component={Prompts}/>
    <Route path="/prompts/:id" component={ChosenPrompt}/>
    </Router>
  )
}

export default App