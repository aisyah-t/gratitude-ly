import React from 'react'
import promptsData from '../../data/prompts'
import AddEntry from './AddEntry'

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
const shuffle = function (array) {

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
const randomColor = function () {

    // The available colors
    var colors = ['peachpuff', 'lightblue', 'thistle', 'darkseagreen'];

    // Shuffle the colors
    shuffle(colors);

    // Grab the first one
    return colors[0];

}

const styles = {
    backgroundColor: randomColor(),
    borderRadius: '10px',
    height: '52rem',
    display: 'inline-block',
    alignItems: 'center',
    margin: '2rem 0',
    padding: '2rem'
}

// const ChosenPrompt = (props) => {
class ChosenPrompt extends React.Component {

    render() {
        let id = this.props.match.params.id
        //console.log(id)
        let chosen = promptsData.find(prompt => prompt.id == id)
        // console.log(chosen)

        return (
            <section className="container" style={styles}>
                    <h5><strong>{chosen.prompt}</strong></h5>
                    <AddEntry />
            </section>
        )
    }
}

export default ChosenPrompt
