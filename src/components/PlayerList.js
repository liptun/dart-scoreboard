import React from 'react'
import { connect } from 'react-redux'
import PlayerListItem from './PlayerListItem'
import '../styles/player-list.scss'

const PlayerList = (props) => {
    return (
        <div className="player-list">
            <div className="player-list__title">
                <p>Players ({props.game.players.length})</p>
            </div>
            {props.game.players.map((player) => (
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

const mapStateToProps = (state) => ({
    game: state.game,
})
export default connect(mapStateToProps)(PlayerList)
