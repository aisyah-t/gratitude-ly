import React from "react"
import { Link } from "react-router-dom"
import About from "./About"
import ChosenPrompt from "./ChosenPrompt"
import { fetchPrompts } from "../hooks/prompts"
import "materialize-css"

const Prompts = () => {
  // handleClick = () => {
  //   this.setState({
  //     promptChosen: true,
  //   })
  const promptsData = fetchPrompts()

  return (
    <main className="container center top-margin">
      <About />
      {promptsData.map((promptObj, i) => {
        return (
          <div className="five offset-by-one columns prompt-card" key={i}>
            <h5>
              <strong>
                <Link to={`prompts/${promptObj.id}`}>{promptObj.prompt}</Link>
              </strong>
            </h5>
          </div>
        )
      })}
    </main>
  )
}
export default Prompts
