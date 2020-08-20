import React from "react"
import { Link } from "react-router-dom"
import { addEntry } from "../apis/api"

class AddEntry extends React.Component {
  state = {
    entry: "",
  }

  handleClick = (evt) => {
    evt.preventDefault()
    addEntry(this.state.entry).then()
    //Need to figure out how to redirect to entries page so user can see entry has been added
  }

  handleChange = (evt) => {
    console.log(this.state)
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  render() {
    // console.log(props)
    return (
      <>
        <form className="container">
          <label></label>
          <textarea
            name="entry"
            value={this.state.entry}
            onChange={this.handleChange}
          />
        </form>
        <Link to="/entries">
          <button onClick={this.handleClick} type="submit">
            ADD ENTRY
          </button>
        </Link>
      </>
    )
  }
}

export default AddEntry
