import React from 'react'
import { Link } from 'react-router-dom'


class AddEntry extends React.Component {

    state = {
        entry: ''
    }

    handleClick = (evt) => {
        evt.preventDefault()
        console.log('STATE.ENTRY IS: ' + this.state.entry)
    }

    handleChange = (evt) => {
        console.log(this.state)
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        // console.log(props)
        return (
            <>
                <form className="container">
                    <label></label>
                    <textarea name="entry" value={this.state.entry} onChange={this.handleChange} />
                </form>
                <button onClick={this.handleClick}>ADD ENTRY</button>
            </>
        )
    }
}

export default AddEntry