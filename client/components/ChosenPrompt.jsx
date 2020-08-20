import React from "react"
import AddEntry from "./AddEntry"
import { randomColor } from "../vanillajs/divstyle"

// const ChosenPrompt = (props) => {
class ChosenPrompt extends React.Component {

  state = {
    backgroundColor: randomColor(),
    borderRadius: "10px",
    height: "",
    display: "inline-block",
    alignItems: "center",
    margin: "2rem 0",
    padding: "2rem",
  }

  render() {
    let id = this.props.match.params.id
    // console.log('PARAMS.MATCH.ID is: ' + id)
    let chosen = this.props.prompts.find((prompt) => prompt.id == id)
    // console.log('USER HAS CHOSEN PROMPT ID ' + chosen)

    return (
      <section className="container" style={this.state}>
        {chosen && (
          <h5>
            <strong>{chosen.prompt}</strong>
          </h5>
        )}
        <AddEntry />
      </section>
    )
  }
}

export default ChosenPrompt
