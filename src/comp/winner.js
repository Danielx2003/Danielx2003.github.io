import React from "react";

export default function Winner(props) {

    console.log(props.winner + " is props")

    return (
        <h1 className="winner-sign " style={props.winner ? { display: 'block' } : { display: 'none' }}> YOU WON!</h1 >
    )
}