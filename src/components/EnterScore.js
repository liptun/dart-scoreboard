import React, { useState } from 'react'
import { connect } from 'react-redux'
import dartHit from '../libs/dartHit'
import { enterScore, nextPlayer } from '../actions'

import '../styles/enter-score.scss'

const EnterScore = (props) => {

    const [score, setScore] = useState('')

    const onScoreSubmit = (e) => {
        e.preventDefault()
        if ( score.trim() ) {
            const currentPlayerScore = props.game.players[props.game.currentPlayerIndex].score.reduce((a, b) => a + b, 0)
            const scoreToWin = props.game.gameType - currentPlayerScore
            const newHit = dartHit(score)
            if ( scoreToWin - newHit > 0 ) {
                props.dispatch(enterScore({score: newHit}))
                props.dispatch(nextPlayer())
            } else if ( scoreToWin - newHit === 0 ) {
                props.dispatch(enterScore({score: newHit}))
                console.log('Player won game')
                // TODO: Dispatch set game winner
            } else {
                props.dispatch(enterScore({score: 0}))
                props.dispatch(nextPlayer())
            }
            setScore('')
        }
    }

    return (
        <div className="enter-score">
            <form onSubmit={onScoreSubmit}>
                <input type="text" value={score} onChange={(e) => setScore(e.target.value)} />
                <button>Score</button>
            </form>
            <p>{dartHit(score)}</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game
})
export default connect(mapStateToProps)(EnterScore)
