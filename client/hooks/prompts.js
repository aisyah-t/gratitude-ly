import React, { useState, useEffect } from "react"
import { getPrompts } from "../apis/api"

export function fetchPrompts() {
  const [prompts, setPrompts] = useState([])
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

  return prompts
}
