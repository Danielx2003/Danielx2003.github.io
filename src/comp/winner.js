import React from "react";

export default function Winner(props) {

    console.log(props.winner + " is props")

    return (
        <div className="winner-sign " style={props.winner ? { display: 'block' } : { display: 'none' }}> YOU WON!</div >
    )
}