import React from 'react'
import { connect } from 'react-redux'

const GameStatus = (props) => {
    return (
        <div className="game-status">
            {props.game.winner ? (
                <p>
                    {props.game.players[props.game.currentPlayerIndex].name}{' '}
                    wins
                </p>
            ) : (
                <p>
                    Current player:{' '}
                    {props.game.players[props.game.currentPlayerIndex].name}
                </p>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game,
})
export default connect(mapStateToProps)(GameStatus)
