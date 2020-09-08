import React from 'react'

const randomThrowMessage = (playerName = 'Annonymous') => {
    const variants = [
        <>
            <span className="player">{playerName} </span>
            throws
        </>,
        <>
            <span className="player">{playerName}</span>
            's turn
        </>,
        <>
            It's
            <span className="player"> {playerName} </span>
            's time
        </>,
        <>
            <span className="player">{playerName} </span> time to rock!
        </>,
        <>
            <span className="player">{playerName} </span> it's showtime
        </>,
        <>
            Time to be awesome
            <span className="player"> {playerName}</span>
        </>,
        <>
            Just do it
            <span className="player"> {playerName}</span>
        </>,
        <>
            Watch out,
            <span className="player"> {playerName} </span>
            throws
        </>,
        <>
            Be gentle
            <span className="player"> {playerName}</span>
        </>,
        <>
            Don't screw it
            <span className="player"> {playerName}</span>
        </>,
        <>
            In
            <span className="player"> {playerName} </span>
            we trust
        </>,
    ]
    const randomIndex = Math.floor(Math.random() * variants.length)
    return variants[randomIndex]
}
export default randomThrowMessage
