import React from 'react'
import { connect } from 'react-redux'
import PlayerListItem from './PlayerListItem'
import '../styles/player-list.scss'

const PlayerList = (props) => {
    return (
        <div className="player-list">
            <div className="player-list__title">
                <p>Players ({props.players.length})</p>
                {props.players.length === 0 && (
                    <p className="info">At least one player is required</p>
                )}
            </div>
            {props.players.map((player) => (
                <PlayerListItem
                    readonly={props.readonly}
                    key={player.id}
                    player={player}
                />
            ))}
        </div>
    )
}
PlayerList.defaultProps = {
    readonly: false,
}
export { PlayerList }

const mapStateToProps = (state) => ({
    players: state.game.players,
})
export default connect(mapStateToProps)(PlayerList)
