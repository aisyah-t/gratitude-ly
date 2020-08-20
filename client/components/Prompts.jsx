import React from "react"
import About from "./About"
import { Link } from "react-router-dom"
import ChosenPrompt from "./ChosenPrompt"
import { randomColor } from "../vanillajs/divstyle"

class Prompts extends React.Component {
  state = {
    backgroundColor: randomColor(),
    borderRadius: "10px",
    height: "11rem",
    display: "inline-block",
    alignItems: "center",
    margin: "2rem 0",
    padding: "2rem",
    promptChosen: false,
  }

  handleClick = () => {
    this.setState({
      promptChosen: true,
    })
  }

  render() {
    // console.log(this.props)
    return (
      <section className="container">
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
      </section>
    )
  }
}

export default Prompts
