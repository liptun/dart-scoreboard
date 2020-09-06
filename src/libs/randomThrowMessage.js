import React, { Fragment } from 'react'

const randomThrowMessage = (playerName = 'Annonymous') => {
    const variants = [
        <Fragment>
            <span className="player">{playerName} </span>
            throws
        </Fragment>,
        <Fragment>
            <span className="player">{playerName}</span>
            's turn
        </Fragment>,
        <Fragment>
            It's
            <span className="player"> {playerName} </span>
            's time
        </Fragment>,
        <Fragment>
            <span className="player">{playerName} </span> time to rock!
        </Fragment>,
        <Fragment>
            <span className="player">{playerName} </span> it's showtime
        </Fragment>,
        <Fragment>
            Time to be awesome
            <span className="player"> {playerName}</span>
        </Fragment>,
        <Fragment>
            Just do it
            <span className="player"> {playerName}</span>
        </Fragment>,
        <Fragment>
            Watch out,
            <span className="player"> {playerName} </span>
            throws
        </Fragment>,
        <Fragment>
            Be gentle
            <span className="player"> {playerName}</span>
        </Fragment>,
        <Fragment>
            Don't screw it
            <span className="player"> {playerName}</span>
        </Fragment>,
        <Fragment>
            In
            <span className="player"> {playerName} </span>
            we trust
        </Fragment>,
    ]
    const randomIndex = Math.floor(Math.random() * variants.length)
    return variants[randomIndex]
}
export default randomThrowMessage
