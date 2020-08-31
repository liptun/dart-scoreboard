import React from 'react'
import { connect } from 'react-redux'
import PlayerList from './PlayerList'

const GamePage = () => {
    return (
        <div>
            <h1>Game</h1>
            <PlayerList readonly={true} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerList: state.playerList
})
export default connect(mapStateToProps)(GamePage)
