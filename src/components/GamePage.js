import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Scoreboard from './Scoreboard'
import EnterScore from './EnterScore'
import GameStatus from './GameStatus'
import GameControls from './GameControls'
import '../styles/game-page.scss'

const GamePage = (props) => {
    useEffect(() => {
        console.log('props.game.gameRunning', props.game.gameRunning)
        if (!props.game.gameRunning) {
            props.history.push('/')
        }
    }, [props.game.gameRunning, props.history])

    return (
        <div className="game-page">
            <h1>Game {props.game.gameType}</h1>
            <GameControls />
            <GameStatus />
            <EnterScore />
            <Scoreboard />
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game,
})
export default connect(mapStateToProps)(GamePage)
