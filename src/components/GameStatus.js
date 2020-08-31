import React from 'react'
import { connect } from 'react-redux'

const GameStatus = (props) => {
    return (
        <div className="game-status">
            <p>Current player: {props.game.currentPlayer}</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game
})
export default connect(mapStateToProps)(GameStatus)
