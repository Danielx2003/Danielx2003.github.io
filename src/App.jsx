import React from 'react';
import Header from "./comp/Header.jsx"
import Player from "./comp/Player.jsx"
import Dropdown from "./comp/Dropdown.jsx"
import Counter from "./comp/Counter.jsx"
import Winner from "./comp/Winner.jsx"
import Loser from "./comp/Loser.jsx"
import players from "./tempData.js"


export default function App(props) {

    console.log(props.player)
    const [gameOver, setGameOver] = React.useState(false)

    const [playerGusessArr, setGuessArr] = React.useState([]) //

    function isGameOver() {
        if (playerGusessArr.length >= 10) {
            return true;
        } else if (playerGusessArr.includes(props.player)) {
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
            <Counter count={playerGusessArr.length} />
            <Dropdown
                setGuesses={setGuessArr}
                gameOver={isGameOver()}
            />
            {playerGusessArr.reverse().map((player) => <Player key={player._id} item={player} goal={props.player} />)}
        </div>

    )
}