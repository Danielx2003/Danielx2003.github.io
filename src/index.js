import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js"
import players from "./tempData.js"


function getRandomPlayer() {
    const random = Math.floor(Math.random() * players.length)
    console.log(players[random])
    return players[random]


};


ReactDOM.render(
    <App
        player={getRandomPlayer()}
    />,
    document.getElementById("root")

)