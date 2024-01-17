import React from 'react';
import Element from "./Element.js"
import players from "../tempData.js"

export default function Dropdown(props) {
    const [send, setSend] = React.useState([])
    const [guessArr, setGuessArr] = React.useState([])
    const [input, setInput] = React.useState("")

    function handleTyping(e) {
        const result = e.target.value.length > 3 ? getFilteredItems(e.target.value) : ""
        setSend([...result])
        setInput(e.target.value)

    }

    function getFilteredItems(items) {
        const playerNames = []
        players.forEach(function (player) {
            playerNames.push(player)
        })
        return playerNames.filter(player =>
            player.name.toLowerCase().includes(items.toLowerCase())
        );
    }

    return (
        <div className="dropdown">
            <input onChange={handleTyping}
                style={props.gameOver ? { display: 'none' } : { display: 'block' }} type="text"
                className="dropdown--input"
                value={input}
                placeholder="Guess here">
            </input>
            {props.setGuesses(guessArr)}
            {send.map(play => <Element
                data={play}
                guess={guessArr}
                setGuess={setGuessArr}
                setSend={setSend}
                setInput={setInput}
            />)}
        </div>


    )


}