import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addPlayer, removePlayer } from '../actions/player'
import '../styles/playerForm.scss'

const PlayerForm = (props) => {
    const [playerName, setPlayerName] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault()
        if ( playerName.trim() ) {
            props.dispatch(addPlayer({name: playerName}))
            setPlayerName('')
        }
    }

    const onPlayerRemove = (id) => {
        props.dispatch(removePlayer({id}))
    }

    return (
        <div className="player-form">
            <h2>Player list</h2>
            <div className="player-list">
                {props.playerList.length === 0 && <p>Add new player</p>}
                {props.playerList.map( player => (
                    <div className="player-item" key={player.id}>
                        <p>{player.name}</p>
                        <button onClick={() => onPlayerRemove(player.id)}>&times;</button>
                    </div>
                ) )}
            </div>
            <div className="player-add">
                <form onSubmit={onFormSubmit}>
                    <input type="text" placeholder="Player name" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
                    <button>Add</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerList: state.playerList
})

export default connect(mapStateToProps)(PlayerForm)
