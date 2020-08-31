import React from 'react'
import { connect } from 'react-redux'
import { removePlayer } from '../actions/player'

const PlayerListItem = (props) => {

    const onPlayerRemove = (id) => {
        props.dispatch(removePlayer({id}))
    }

    return (
        <div className="player-list__item">
            <p>{props.player.name}</p>
            <button onClick={() => onPlayerRemove(props.player.id)}>&times;</button>
        </div>
    )
}

export default connect()(PlayerListItem)
