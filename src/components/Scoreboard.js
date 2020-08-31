import React from 'react'
import { connect } from 'react-redux'

import ScoreboardPlayer from './ScoreboardPlayer'

import '../styles/scoreboard.scss'

const Scoreboard = (props) => {
    return (
        <div className="scoreboard">
            {props.playerList.map(player => (
                <ScoreboardPlayer key={player.id} player={player} />
            ))}
        </div>
    )
}


const mapStateToProps = (state) => ({
    playerList: state.playerList
})

export default connect(mapStateToProps)(Scoreboard)
