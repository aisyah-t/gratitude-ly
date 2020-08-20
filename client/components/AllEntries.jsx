import React from "react"

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
const shuffle = function (array) {
  var currentIndex = array.length
  var temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

/**
 * Pick a random color for a list
 * @return {String} The color
 */
const randomColor = function () {
  // The available colors
  var colors = ["peachpuff", "lightblue", "thistle", "darkseagreen"]

  // Shuffle the colors
  shuffle(colors)

  // Grab the first one
  return colors[0]
}

class Prompts extends React.Component {
  state = {
    backgroundColor: randomColor(),
    borderRadius: "10px",
    height: "",
    display: "inline-block",
    alignItems: "center",
    margin: "2rem 0",
    padding: "2rem",
  }

  render() {
    return (
      <section className="container" style={this.state}>
        <h5>This is the entry placeholder</h5>
      </section>
    )
  }
}

export default Prompts
