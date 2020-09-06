import React, { Fragment } from 'react'

const randomWinMessage = (playerName = 'Annonymous') => {
    const variants = [
        <Fragment>
            <span className="player">{playerName} </span>
            wins
        </Fragment>,
        <Fragment>
            <span className="player">{playerName} </span>
            blows competition
        </Fragment>,
        <Fragment>
            <span className="player">{playerName} </span>
            is the champion
        </Fragment>,
        <Fragment>
            <span className="player">{playerName} </span>
            is a winner
        </Fragment>,
        <Fragment>
            <span className="player">{playerName} </span>
            has a bigger one
        </Fragment>,
    ]
    const randomIndex = Math.floor(Math.random() * variants.length)
    return variants[randomIndex]
}
export default randomWinMessage
