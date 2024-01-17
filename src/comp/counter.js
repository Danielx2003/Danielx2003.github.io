import React from 'react';

export default function Counter(props) {
    return (
        <p className="counter" style={props.count > 8 ? { color: 'red' } : { color: 'black' }}>Guess {props.count} of 10</p>

    )

}