import React, { useState } from 'react'
import { connect } from 'react-redux'
import dartHit from '../libs/dartHit'
import { playerHit } from '../actions'




import '../styles/enter-score.scss'

const EnterScore = (props) => {
    const [score, setScore] = useState('' )

    const onScoreSubmit = (e) => {
        e.preventDefault()
        if (score.trim()) {
            const newHit = dartHit(score)
            props.dispatch(playerHit({ score: newHit }))
            setScore('')
        }
    }

    return (
        <div className="enter-score">
            <form onSubmit={onScoreSubmit}>
                <input
                    type="text"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                />
                <button>Score</button>
            </form>
            <p>{dartHit(score)}</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game,
})
export default connect(mapStateToProps)(EnterScore)
