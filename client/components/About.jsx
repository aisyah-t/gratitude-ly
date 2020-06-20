import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <React.Fragment>
            <h2>Keep track of the good things in life with Gratitude-ly</h2>
            <h5>Choose from a variety of prompts and write your journal entry based on your chosen prompt.</h5>
            <p>Research shows that journaling about the good things in your life can help prepare you to deal with rough patches
                when they pop up.</p>
            <p>On days when you feel blue, you can read through your gratitude journal to readjust your attitude and remember the good things in your life.</p>
            <Link to="./prompts"><button input="button">CHOOSE PROMPT</button></Link>
        </React.Fragment>
    )
}

export default About