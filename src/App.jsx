import React from 'react';
import Header from "./components/Header.jsx"
import Player from "./components/Player.jsx"
import Dropdown from "./components/Dropdown.jsx"
import Counter from "./components/Counter.jsx"
import Winner from "./components/Winner.jsx"
import Loser from "./components/Loser.jsx"
import players from "./tempData.js"


export default function App(props) {

    console.log(props.player)
    const [gameOver, setGameOver] = React.useState(false)

    const [playerGuesses, setGuessArr] = React.useState([]) //
    console.log("PLAYER GUESS ARR IS", playerGuesses)

    function isGameOver() {
        if (playerGuesses.length >= 10) {
            return true;
        } else if (playerGuesses.includes(props.player)) {
            return true;
        } else {
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
            <Counter count={playerGuesses.length} />
            <main>
                <Dropdown
                    setGuesses={setGuessArr}
                    gameOver={isGameOver()}
                />
                {playerGuesses.reverse().map((player) => <Player key={player._id} item={player} goal={props.player} />)}
            </main>

        </div>

    )
}