import React from "react";

export default function Loser(props) {

    console.log(props.loser.length + " is loser props")

    return (
        <h1 className="loser-sign"> YOU LOST!</h1 >
        //<h1 className="loser-sign " style={props.loser.legnth > 0 ? { display: 'block' } : { display: 'none' }}> YOU LOST!</h1 >
    )
}