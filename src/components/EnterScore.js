import React, { useState } from 'react'
import { connect } from 'react-redux'
import dartHit from '../libs/dartHit'
import { playerHit } from '../actions'

import '../styles/enter-score.scss'
import Enter from '../icons/Enter'

const EnterScore = (props) => {
    const [score, setScore] = useState('')

    const onScoreSubmit = (e) => {
        e.preventDefault()
        if (score.trim()) {
            const newHit = dartHit(score)
            props.dispatch(playerHit({ score: newHit }))
            setScore('')
        }
    }

    const cssClass = props.game.winner ? 'enter-score disabled' : 'enter-score'
    return (
        <div className={cssClass}>
            <form onSubmit={onScoreSubmit}>
                <input
                    type="text"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    placeholder="Enter score"
                />
                <button className="btn-ico">
                    <Enter />
                </button>
            </form>
            <p>
                Hit score: <span>{dartHit(score)}</span>
            </p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game,
})
export default connect(mapStateToProps)(EnterScore)
