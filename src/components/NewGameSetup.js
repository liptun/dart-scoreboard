import React from 'react'
import { connect } from 'react-redux'
import PlayerList from './PlayerList'
import PlayerForm from './PlayerForm'

const NewGameSetup = () => {

    return (
        <div className="new-game-setup">
            <h2>New game</h2>
            <PlayerList />
            <PlayerForm />
        </div>
    )

}

const mapStateToProps = (state) => ({
    playerList: state.playerList
})

export default connect(mapStateToProps)(NewGameSetup)
