import React from "react"
import { Link } from "react-router-dom"
import About from "./About"
import ChosenPrompt from "./ChosenPrompt"
import { fetchPrompts } from "../hooks/prompts"

const Prompts = () => {
  // handleClick = () => {
  //   this.setState({
  //     promptChosen: true,
  //   })
  let prompts = fetchPrompts()

  return (
    <main className="container center top-margin">
      <About />
      {prompts.map((element, i) => {
        return (
          <div className="five offset-by-one columns prompt-card" key={i} id={element.id}>
            <h5>
              <strong>
                <Link to={`prompts/${element.id}`}>{element.prompt}</Link>
              </strong>
            </h5>
          </div>
        )
      })}
    </main>
  )
}
export default Prompts
