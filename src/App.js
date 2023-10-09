import React from 'react';
import Header from "./comp/header.js"
import Player from "./comp/player.js"
import Dropdown from "./comp/dropdown.js"
import Counter from "./comp/counter.js"
import Winner from "./comp/winner.js"
import players from "./tempData.js"


export default function App(props) {

    const [gameOver, setGameOver] = React.useState(false)

    console.log(props.player)
    const [playerGusessArr, setGuessArr] = React.useState([])

    function isGameOver() {
        console.log("length is " + playerGusessArr.length)
        if (playerGusessArr.length >= 10) {
            return true;
        } else if (playerGusessArr.includes(props.player)) {
            return true;
        }
        else {
            return false
        }
    }


    return (
        <div className="container">
            <Header />
            <Counter count={playerGusessArr.length} />
            <Dropdown
                setGuesses={setGuessArr}
                gameOver={isGameOver()}
            />
            <Winner
                winner={playerGusessArr.includes(props.player) ? true : false}
            />
            {playerGusessArr.reverse().map((player) => <Player item={player} goal={props.player} />)}
        </div>

    )
}