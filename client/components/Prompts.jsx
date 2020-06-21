import React from 'react'
import promptsData from '../../data/prompts'
import { Link } from 'react-router-dom'

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function (array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

}

/**
 * Pick a random color for a list
 * @return {String} The color
 */
var randomColor = function () {

    // The available colors
    var colors = ['peachpuff', 'lightblue', 'thistle', 'darkseagreen'];

    // Shuffle the colors
    shuffle(colors);

    // Grab the first one
    return colors[0];

}


class Prompts extends React.Component {

    state = {
        backgroundColor: randomColor(),
        borderRadius: '10px',
        height: '11rem',
        display: 'inline-block',
        alignItems: 'center',
        margin: '2rem',
        padding: '2rem'
    }

    render() {

        return (
            <div className="row">
                {promptsData.map((element, i) => {
                    return <div className="twelve columns" style={this.state} key={i} id={element.id}>
                        <h5>{element.prompt}</h5>
                </div> 
                })}
                    {/* Create a div for prompts boxes */ }
                    {/* Loop over array in prompts.js */ }
                    {/* Place prompt in each div */ }
                    {/* Style each prompt div -  look for styling in CSS files */ }
            </div>
        )
    }
}

export default Prompts