import React from 'react'

const randomWinMessage = (playerName = 'Annonymous') => {
    const variants = [
        <>
            <span className="player">{playerName} </span>
            wins
        </>,
        <>
            <span className="player">{playerName} </span>
            blows competition
        </>,
        <>
            <span className="player">{playerName} </span>
            is the champion
        </>,
        <>
            <span className="player">{playerName} </span>
            is a winner
        </>,
        <>
            <span className="player">{playerName} </span>
            has a bigger one
        </>,
    ]
    const randomIndex = Math.floor(Math.random() * variants.length)
    return variants[randomIndex]
}
export default randomWinMessage
