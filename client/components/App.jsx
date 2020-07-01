import React from 'react'
import Home from './Home'
import Prompts from './Prompts'
import ChosenPrompt from './ChosenPrompt'
import AllEntries from './AllEntries'
import { HashRouter as Router, Route } from 'react-router-dom'
import { getPrompts } from '../apis/api'

class App extends React.Component {

  state = {
    prompts: []
  }

  componentDidMount = () => {
    console.log('no prompts')
    getPrompts()
    .then(prompts => {
    console.log('got prompts')
    this.setState ({
        prompts: prompts
      })
    })
  }

  render() {
    return (
      <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/prompts" render={props => {
        return <Prompts  {...props} prompts={this.state.prompts}/>
      }}/>
      <Route path="/prompts/:id" render={props => {
        return <ChosenPrompt {...props} prompts={this.state.prompts}/>
      }}/>
      <Route exact path="/entries" component={AllEntries}/>
      </Router>
    )  
  }
}

export default App