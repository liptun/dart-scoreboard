import React from 'react'
import { connect } from 'react-redux'
import randomThrowMessage from '../libs/randomThrowMessage'
import randomWinMessage from '../libs/randomWinMessage'

import '../styles/game-status.scss'

const GameStatus = (props) => {
    const playerIndex = props.game.currentPlayerIndex
    const { name: playerName } = props.game.players[playerIndex]
    return (
        <div className="game-status">
            {props.game.winner ? (
                <p>{randomWinMessage(playerName)}</p>
            ) : (
                <p>{randomThrowMessage(playerName)}</p>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game,
})
export default connect(mapStateToProps)(GameStatus)
