import React from 'react';
import Header from "./comp/header.js"
import Player from "./comp/player.jsx"
import Dropdown from "./comp/dropdown.js"
import Counter from "./comp/counter.js"
import Winner from "./comp/winner.js"
import Loser from "./comp/loser.js"
import Card from "./comp/card.js"
import players from "./tempData.js"


export default function App(props) {

    console.log(props.player)
    const [gameOver, setGameOver] = React.useState(false)

    const [playerGusessArr, setGuessArr] = React.useState([])

    function isGameOver() {
        if (playerGusessArr.length >= 10) {
            return true;
        } else if (playerGusessArr.includes(props.player)) {
            return true;
        }
        else {
            return false
        }
    }

    //ADD BACK BELOW DROPDOWN (?)
    /*
    <Winner
        winner={playerGusessArr.includes(props.player) ? true : false}
    />
    <Loser
        loser={playerGusessArr}
    />
    */

    return (
        <div className="container">
            <Header />
            <Counter count={playerGusessArr.length} />
            <Dropdown
                setGuesses={setGuessArr}
                gameOver={isGameOver()}
            />
            {playerGusessArr.reverse().map((player) => <Player item={player} goal={props.player} />)}
        </div>

    )
}