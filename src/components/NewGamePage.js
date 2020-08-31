import React from 'react'
import { connect } from 'react-redux'
import PlayerList from './PlayerList'
import PlayerForm from './PlayerForm'
import GameCustomize from './GameCustomize'
import { startGame } from '../actions'
import '../styles/new-game-page.scss'

const NewGamePage = (props) => {

    const startNewGame = () => {
        props.history.push('/game')
        props.dispatch(startGame())
    }

    return (
        <div className="new-game-page">
            <h2>New game</h2>
            <GameCustomize />
            <PlayerList />
            <PlayerForm />
            <button
                //disabled={!props.game.players.length}
                className="button-start-game"
                onClick={() => startNewGame()}
            >Start game</button>
        </div>
    )

}

const mapStateToProps = (state) => ({
    game: state.game
})

export default connect(mapStateToProps)(NewGamePage)
