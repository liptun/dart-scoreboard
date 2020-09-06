import React from 'react'
import { connect } from 'react-redux'
import randomThrowsMessage from '../libs/randomThrowsMessage'

import '../styles/game-status.scss'

const GameStatus = (props) => {
    const playerIndex = props.game.currentPlayerIndex
    const { name: playerName } = props.game.players[playerIndex]
    return (
        <div className="game-status">
            {props.game.winner ? (
                <p>
                    {props.game.players[props.game.currentPlayerIndex].name}{' '}
                    wins
                </p>
            ) : (
                <p>{randomThrowsMessage(playerName)}</p>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game,
})
export default connect(mapStateToProps)(GameStatus)
