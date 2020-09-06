import React from 'react'
import { connect } from 'react-redux'
import { endGame } from '../actions'

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
            <button onClick={onClickEnd}></button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game,
})
export default connect(mapStateToProps)(GameControls)
