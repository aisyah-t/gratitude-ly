import React from "react"
import { randomColor } from "../vanillajs/divstyle"

class Prompts extends React.Component {
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
    return (
      <section className="container" style={this.state}>
        <h5>This is the entry placeholder</h5>
      </section>
    )
  }
}

export default Prompts
