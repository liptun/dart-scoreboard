import React from 'react'
import { connect } from 'react-redux'
import { removePlayer } from '../actions/player'
import '../styles/player-list.scss'

const PlayerList = (props) => {

    const onPlayerRemove = (id) => {
        props.dispatch(removePlayer({id}))
    }

    return (
        <div className="player-list">
            {props.playerList.length === 0 && <p>Add new player</p>}
            {props.playerList.map( player => (
                <div className="player-item" key={player.id}>
                    <p>{player.name}</p>
                    <button onClick={() => onPlayerRemove(player.id)}>&times;</button>
                </div>
            ) )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerList: state.playerList
})
export default connect(mapStateToProps)(PlayerList)
