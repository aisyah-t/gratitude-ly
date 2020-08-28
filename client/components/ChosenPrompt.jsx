import React, { useState, useEffect } from "react"
import AddEntry from "./AddEntry"
import { useParams } from "react-router-dom"
import { getPrompts } from "../apis/api"

const ChosenPrompt = () => {
  const [chosenPrompt, setPrompt] = useState([])
  const { id: chosenId } = useParams()

  useEffect(() => {
    getPrompts().then((data) => {
      let chosen = data.find((prompt) => prompt.id == chosenId)
      return setPrompt(chosen)
    })
  }, [])

  return (
    <section className="container">
      <h5>
        <strong>{chosenPrompt.prompt}</strong>
      </h5>
      <AddEntry />
    </section>
  )
}

export default ChosenPrompt
