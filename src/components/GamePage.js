import React from 'react'
import { connect } from 'react-redux'

const GamePage = (props) => {
    return (
        <div>
            <h1>Game</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius doloremque assumenda ex magni explicabo cumque repellendus nesciunt architecto fugiat, quia dolor rerum accusantium, ea dolore excepturi repudiandae id! Iure, perferendis.</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerList: state.playerList
})
export default connect(mapStateToProps)(GamePage)
