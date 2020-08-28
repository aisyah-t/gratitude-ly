import React from "react"
import { Link } from "react-router-dom"
import { addEntry } from "../apis/api"

const AddEntry = () => {
  // USE REACT HOOKS IN THIS COMPONENT

  // handleClick = (evt) => {
  //   evt.preventDefault()
  //   addEntry(this.state.entry).then()
  //   //Need to figure out how to redirect to entries page so user can see entry has been added
  // }

  return (
    <>
      <form className="container">
        <label></label>
        <textarea name="entry" value="" onChange={() => console.log(e.target.value)} />
      </form>
      <Link to="/entries">
        <button type="submit">ADD ENTRY</button>
      </Link>
    </>
  )
}

export default AddEntry
