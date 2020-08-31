import React from 'react'
import { connect } from 'react-redux'
import Scoreboard from './Scoreboard'
import EnterScore from './EnterScore'

import '../styles/game-page.scss'

const GamePage = (props) => {
    return (
        <div className="game-page">
            <h1>Game {props.game.gameType}</h1>
            <EnterScore />
            <Scoreboard />
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game
})
export default connect(mapStateToProps)(GamePage)
