const gameReducerDefaultState = {
    gameType: 301,
    gameEnded: true,
    currentPlayer: undefined
}

export default (state = gameReducerDefaultState, action) => {
    switch (action.type) {

        case 'SET_GAME_TYPE':
            return {
                ...state,
                gameType: action.gameType
            }

        default:
            return state
    }
}
