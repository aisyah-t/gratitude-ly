import React, { useEffect } from "react"
import AddEntry from "./AddEntry"
import { useParams } from "react-router-dom"
import { fetchPrompts } from "../hooks/prompts"

const ChosenPrompt = () => {

  // render() {
  //   let id = this.props.match.params.id
  //   // console.log('PARAMS.MATCH.ID is: ' + id)
  //   let chosen = this.props.prompts.find((prompt) => prompt.id == id)
  //   // console.log('USER HAS CHOSEN PROMPT ID ' + chosen)


  return (
    <section className="container">
        <h5>
          <strong>{chosen.prompt}</strong>
        </h5>
      <AddEntry />
    </section>
  )
}

export default ChosenPrompt
