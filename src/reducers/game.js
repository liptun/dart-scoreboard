const gameReducerDefaultState = {
    gameType: 301,
    gameEnded: true,
    currentPlayer: undefined,
    players: []
}

export default (state = gameReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            return {
                ...state,
                players: [
                    ...state.players,
                    action.player
                ]
            }

        case 'REMOVE_PLAYER':
            return {
                ...state,
                players: state.players.filter( ({ id }) => id !== action.id )
            }

        case 'SET_GAME_TYPE':
            return {
                ...state,
                gameType: action.gameType
            }

        default:
            return state
    }
}
