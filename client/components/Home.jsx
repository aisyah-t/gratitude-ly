import React from "react"
// import { Link } from "react-router-dom"


const Home = () => {
  return (
    <>
        <h2>Welcome to Gratitude-ly</h2>
              <h5>
                Gratitude-ly is your personal prompt-based gratitude journal.
                Simply choose a prompt to add a journal entry and keep track of
                the good things in life.
              </h5>
              <Button large node="a" waves="teal" href="/#/prompts">
                <strong>
                  <h6>GET STARTED: CHOOSE A PROMPT</h6>
                </strong>
              </Button>
              </>
  )
}

export default Home
