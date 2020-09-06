import React from 'react'
import { connect } from 'react-redux'
import { endGame } from '../actions'
import closeIcon from '../assets/close.svg'

const GameControls = (props) => {
    const onClickUndo = () => {}
    const onClickReset = () => {}
    const onClickEnd = () => {
        props.dispatch(endGame())
    }

    return (
        <div>
            <button onClick={onClickUndo}>Undo</button>
            <button onClick={onClickReset}>Reset</button>
            <button onClick={onClickEnd} className="btn-icon">
                <img src={closeIcon} alt="close" />
            </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game,
})
export default connect(mapStateToProps)(GameControls)
