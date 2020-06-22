import React from 'react'
import { Link } from 'react-router-dom'


class AddEntry extends React.Component {

    render() {
        return (
            <>
                <form className="container">
                    <textarea ref={description => this.description = description} />
                </form>
                <button type="input">ADD ENTRY</button>
            </>
        )
    }
}

export default AddEntry