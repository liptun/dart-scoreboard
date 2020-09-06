import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPlayer } from '../actions'

import '../styles/player-form.scss'

const PlayerForm = (props) => {
    const [playerName, setPlayerName] = useState(
        `Player ${props.game.players.length + 1}`
    )

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (playerName.trim()) {
            props.dispatch(addPlayer({ name: playerName }))
            setPlayerName(`Player ${props.game.players.length + 2}`)
        }
    }

    return (
        <div className="player-form">
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="Player name"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    onFocus={(e) => e.target.select()}
                />
                <button disabled={props.game.players.length >= 6}>Add</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game,
})
export default connect(mapStateToProps)(PlayerForm)
