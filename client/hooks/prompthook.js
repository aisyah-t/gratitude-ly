import { getPrompts } from "../apis/api"
import React, { useState, useEffect } from "react"

export default function setPrompts() {
  const [prompts, setPrompts] = useState()

  useEffect(() => {
    getPrompts().then((data) => setPrompts(data))
    return prompts
  }, [])
}
