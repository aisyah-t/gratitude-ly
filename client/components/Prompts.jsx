import React, { useState, useEffect } from "react"
import About from "./About"
import { Link } from "react-router-dom"
import ChosenPrompt from "./ChosenPrompt"
import { getPrompts } from "../apis/api"

const Prompts = () => {
  // handleClick = () => {
  //   this.setState({
  //     promptChosen: true,
  //   })
  const [prompts, setPrompts] = useState()

  useEffect(() => {
    getPrompts().then((data) => setPrompts(data))
    return prompts
  }, [])

  return (
    <main className="six-columns">
      <About />
      <p>test</p>
      {/* {this.state.promptChosen ? 
                this.props.prompts.map((element, i) => {
                    return (
                    <div className="columns" style={this.state} key={i} id={element.id}>
                        <h5><strong><Link to={`prompts/${element.id}`} onClick={this.handleClick}>{element.prompt}</Link></strong></h5>
                    </div>
                    )
                })} */}
      {/* <ChosenPrompt /> */}
      {/* :
                    {this.state.promptChosen ? 
                this.props.prompts.map((element, i) => {
                    return (
                    <div className="columns" style={this.state} key={i} id={element.id}>
                        <h5><strong><Link to={`prompts/${element.id}`} onClick={this.handleClick}>{element.prompt}</Link></strong></h5>
                    </div>
                    )
                })}
                } */}
    </main>
  )
}
export default Prompts
