import React from 'react'
import { connect } from 'react-redux'
import { setGameType } from '../actions'

import '../styles/game-customize.scss'

const GameCustomize = (props) => {
    const onChangeGameType = (gameType) => {
        props.dispatch(setGameType({ gameType }))
    }

    return (
        <div className="game-customize">
            <select
                value={props.game.gameType}
                onChange={(e) => onChangeGameType(e.target.value)}
            >
                <option value={101}>101</option>
                <option value={301}>301</option>
                <option value={501}>501</option>
                <option value={701}>701</option>
                <option value={901}>901</option>
            </select>
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game,
})

export default connect(mapStateToProps)(GameCustomize)
