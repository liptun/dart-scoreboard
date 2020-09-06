import React from 'react'
import { connect } from 'react-redux'
import {
    endGame,
    clearScore,
    startGame,
    undoLast,
    clearWinner,
} from '../actions'
import '../styles/game-controls.scss'

const GameControls = (props) => {
    const onClickUndo = () => {
        props.dispatch(undoLast())
    }
    const onClickReset = () => {
        props.dispatch(clearWinner())
        props.dispatch(clearScore())
        props.dispatch(startGame())
    }
    const onClickEnd = () => {
        props.dispatch(clearWinner())
        props.dispatch(clearScore())
        props.dispatch(endGame())
    }

    return (
        <div className="game-controls">
            <button
                onClick={onClickUndo}
                className="btn btn-ico"
                title="Undo last move"
            >
                <i className="ico ico-back"></i>
            </button>
            <button
                onClick={onClickReset}
                className="btn btn-ico"
                title="Reset game"
            >
                <i className="ico ico-replay"></i>
            </button>
            <button
                onClick={onClickEnd}
                className="btn btn-ico"
                title="End game"
            >
                <i className="ico ico-close"></i>
            </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game,
})
export default connect(mapStateToProps)(GameControls)
