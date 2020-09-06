import React from 'react'
import { connect } from 'react-redux'
import { endGame } from '../actions'
import '../styles/game-controls.scss'

const GameControls = (props) => {
    const onClickUndo = () => {}
    const onClickReset = () => {}
    const onClickEnd = () => {
        props.dispatch(endGame())
    }

    return (
        <div class="game-controls">
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
