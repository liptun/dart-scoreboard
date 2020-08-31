import React from 'react'
import { connect } from 'react-redux'
import PlayerListItem from './PlayerListItem'
import '../styles/player-list.scss'

const PlayerList = (props) => {
    console.log(props.readonly)
    return (
        <div className="player-list">
            <div className="player-list__title">
                <p>Players ({props.playerList.length})</p>
            </div>
            {props.playerList.map( player => (
                <PlayerListItem readonly={props.readonly} key={player.id} player={player}/>
            ) )}
        </div>
    )
}
PlayerList.defaultProps = {
    readonly: false
}

const mapStateToProps = (state) => ({
    playerList: state.playerList
})
export default connect(mapStateToProps)(PlayerList)
