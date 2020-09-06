import React from 'react'
import { connect } from 'react-redux'

const ScoreboardPlayer = (props) => {
    return (
        <div className="scoreboard__player">
            <div className="scoreboard__player__name">
                <p>{props.player.name}</p>
            </div>
            <div className="scoreboard__player__summary">
                <p>
                    {props.game.gameType -
                        props.player.score.reduce((a, b) => a + b, 0)}
                </p>
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
    game: state.game,
})

export default connect(mapStateToProps)(ScoreboardPlayer)
