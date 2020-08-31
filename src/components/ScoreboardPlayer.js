import React from 'react'
import { connect } from 'react-redux'


const ScoreboardPlayer = (props) => {
    return (
        <div className="scoreboard__player">
            <div className="scoreboard__player__name">
                <p>{props.player.name}</p>
            </div>
            <div className="scoreboard__player__points">
                {props.player.score.map((point, index) => (
                    <p key={index}>{point}</p>
                ))}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    playerList: state.playerList
})

export default connect(mapStateToProps)(ScoreboardPlayer)
