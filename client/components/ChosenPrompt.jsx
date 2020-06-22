import React from 'react'
import promptsData from '../../data/prompts'
import { Link } from 'react-router-dom'

const ChosenPrompt = (props) => {

    let id = props.match.params.id
    let chosen = promptsData.find(prompt => prompt.id == id)

    return (
        <main className="container">
            <h5><strong>{chosen.prompt}</strong></h5>
        </main>
    )
}

export default ChosenPrompt
