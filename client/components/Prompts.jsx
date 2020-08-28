import React, { useState, useEffect } from "react"
import About from "./About"
import { Link } from "react-router-dom"
import { getPrompts } from "../apis/api"
import "materialize-css"

const Prompts = () => {
  const [promptsData, setPrompts] = useState([])
  const [error, setError] = useState("Sorry, there isn't anything to display")

  useEffect(() => {
    getPrompts()
      .then((data) => {
        return setPrompts(data)
      })
      .catch((err) => {
        setError(err)
      })
  }, [])

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
