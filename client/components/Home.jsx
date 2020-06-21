import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <React.Fragment>
            <h1>Welcome to Gratitude-ly</h1>
            <h4>Your personal prompt-based gratitude journal</h4>
            <img src="https://cdn11.bigcommerce.com/s-h5d6u1d2vw/images/stencil/2048x2048/uploaded_images/11-26-gratitude-blog-thumbnail.jpg?t=1574811777"
                alt="5 of the Best Gratitude Journal Prompts" width="80%" />
            <Link to="/prompts"><button input="button" className="button">GET STARTED: CHOOSE A PROMPT</button></Link>
        </React.Fragment>
    )
}

export default Home