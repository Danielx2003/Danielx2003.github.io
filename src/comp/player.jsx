import React from 'react';

export default function Player(props) {

    var ageTxt = props.item.age;
    if (props.item.age > props.goal.age) {
        ageTxt = props.item.age + " ↓"
    } else if (props.item.age < props.goal.age) {
        ageTxt = props.item.age + " ↑"
    }

    return (
        <div className="player">
            <div className="player--top">
                <img src={props.item.photo} alt="Player Img" className="player--img"></img>
                <h1 className="player--name">{props.item.name}</h1>
            </div>
            <div className="player--bottom">
                <div className="player--stats-top">
                    <div className={props.item.age == props.goal.age ? "correct" : "wrong"}>
                        <p className="stat-title">Age</p>
                        <p className="stat--stat">{ageTxt}</p>
                    </div>
                    <div className={props.item.pos == props.goal.pos ? "correct" : "wrong"}>
                        <p className="stat-title">Pos</p>
                        <p className="stat--stat">{props.item.pos}</p>
                    </div>
                    <div className={props.item.foot == props.goal.foot ? "correct" : "wrong"}>
                        <p className="stat-title">Foot</p>
                        <p className="stat--stat">{props.item.foot}</p>
                    </div>
                </div>
                <div className="player--stats-bottom">
                    <div className={props.item.country == props.goal.country ? "correct" : "wrong"}>
                        <p className="stat-title">Nation</p>
                        <img className="player--country" src={props.item.country} />
                    </div>
                    <div className={props.item.club == props.goal.club ? "correct" : "wrong"}>
                        <p className="stat-title">Club</p>
                        <img className="player--club" src={props.item.club}></img>
                    </div>

                </div>
            </div>

        </div>
    )

};