import React, { useState, useEffect } from "react"
import { getPrompts } from "../apis/api"

export function fetchPrompts() {
  const [prompts, setPrompts] = useState([])

  useEffect(() => {
    getPrompts().then((data) => {
      return setPrompts(data)
    })
  }, [])

  return prompts
}
