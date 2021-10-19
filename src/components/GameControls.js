import React from 'react'
import { connect } from 'react-redux'
import {
    endGame,
    clearScore,
    startGame,
    undoLast,
    clearWinner,
} from '../actions'
import Back from '../icons/Back'
import Close from '../icons/Close'
import Replay from '../icons/Replay'
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
                <Back />
            </button>
            <button
                onClick={onClickReset}
                className="btn btn-ico"
                title="Reset game"
            >
                <Replay />
            </button>
            <button
                onClick={onClickEnd}
                className="btn btn-ico"
                title="End game"
            >
                <Close />
            </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game,
})
export default connect(mapStateToProps)(GameControls)
