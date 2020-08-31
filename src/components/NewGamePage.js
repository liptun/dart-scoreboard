import React from 'react'
import { connect } from 'react-redux'
import PlayerList from './PlayerList'
import PlayerForm from './PlayerForm'
import '../styles/new-game-setup.scss'

const NewGamePage = (props) => {

    return (
        <div className="new-game-setup">
            <h2>New game</h2>
            <PlayerList />
            <PlayerForm />
            <button
                disabled={!props.playerList.length}
                className="button-start-game"
                onClick={() => props.history.push('/game')}
            >Start game</button>
        </div>
    )

}

const mapStateToProps = (state) => ({
    playerList: state.playerList
})

export default connect(mapStateToProps)(NewGamePage)
