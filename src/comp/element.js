import React from 'react';


export default function Element(props) {
    function handleClick(e) {
        props.guess(prevArr => [...prevArr, props.data])
        props.setSend([])
        props.setInput("")
    }

    return (
        <div className="element">
            {JSON.stringify(props.data).length >= 1 ? <p onClick={handleClick} >{props.data.name}</p> : <p onClick={handleClick}>nish</p>}
        </div>

    )
}

//{props.data.length >= 1 ? props.data.map(data => <p onClick={handleClick} >{data}</p>) : <p>nish</p>}