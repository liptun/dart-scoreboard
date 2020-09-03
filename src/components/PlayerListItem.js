import React from 'react'
import { connect } from 'react-redux'
import { removePlayer } from '../actions'

const PlayerListItem = (props) => {
    const onRemovePlayer = (id) => {
        props.dispatch(removePlayer({ id }))
    }

    return (
        <div className="player-list__item">
            <p>{props.player.name}</p>
            {!props.readonly && (
                <button onClick={() => onRemovePlayer(props.player.id)}>
                    &times;
                </button>
            )}
        </div>
    )
}
PlayerListItem.defaultProps = {
    readonly: false,
}

export default connect()(PlayerListItem)
