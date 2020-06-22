import React from 'react'
import Home from './Home'
import Prompts from './Prompts'
import ChosenPrompt from './ChosenPrompt'
import AddEntry from './AddEntry'
import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
    {/* <div className="rows"> */}
    <Route exact path="/" component={Home}/>
    <Route exact path="/prompts" component={Prompts}/>
    <Route path="/prompts/:id" component={ChosenPrompt}/>
    <Route path="/prompts/:id" component={AddEntry}/>
    {/* </div> */}
    </Router>
  )
}

export default App