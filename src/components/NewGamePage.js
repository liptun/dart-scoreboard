import React from 'react'
import { connect } from 'react-redux'
import PlayerList from './PlayerList'
import PlayerForm from './PlayerForm'
import GameCustomize from './GameCustomize'
import { startGame } from '../actions'
import '../styles/new-game-page.scss'
import Target from '../icons/Target'
import UnicornSolid from '../icons/UnicornSolid'

const NewGamePage = (props) => {
    const startNewGame = () => {
        props.history.push('/game')
        props.dispatch(startGame())
    }

    return (
        <div className="new-game-page">
            <div className="brand">
                <h1>Dart 101</h1>
                <UnicornSolid />
            </div>
            <GameCustomize />
            <PlayerList />
            <PlayerForm />
            <button
                disabled={!props.game.players.length}
                className="btn btn-cta"
                onClick={() => startNewGame()}
            >
                <span>Start </span>
                <Target />
            </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    game: state.game,
})

export default connect(mapStateToProps)(NewGamePage)
