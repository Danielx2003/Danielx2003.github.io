import React from "react";

export default function Loser(props) {

    console.log(props.loser.length + " is loser props")

    return (
        <div className="loser-sign">
            <h1>YOU LOST!</h1 >
        </div>
        //<h1 className="loser-sign " style={props.loser.legnth > 0 ? { display: 'block' } : { display: 'none' }}> YOU LOST!</h1 >
    )
}