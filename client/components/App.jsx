import React from "react"
import Home from "./Home"
import Prompts from "./Prompts"
import ChosenPrompt from "./ChosenPrompt"
import AllEntries from "./AllEntries"
import { HashRouter as Router, Route } from "react-router-dom"

const App = () => {

    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/prompts"
          render={(props) => {
            return <Prompts />
          }}
        />
        <Route
          path="/prompts/:id"
          render={(props) => {
            return <ChosenPrompt />
          }}
        />
        <Route exact path="/entries" component={AllEntries} />
      </Router>
    )
}

export default App
