import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPlayer } from '../actions'

import '../styles/player-form.scss'

const PlayerForm = (props) => {
    const [playerName, setPlayerName] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (playerName.trim()) {
            props.dispatch(addPlayer({ name: playerName }))
            setPlayerName('')
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
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default connect()(PlayerForm)
