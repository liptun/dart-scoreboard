const gameReducerDefaultState = {
    gameType: 301,
    gameRunning: false,
    currentPlayerIndex: 0,
    players: []
}

export default (state = gameReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            return {
                ...state,
                players: state.players.concat(action.player)
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

        case 'START_GAME':
            return {
                ...state,
                currentPlayerIndex: 0,
                gameRunning: true
            }

        case 'END_GAME':
            return {
                ...state,
                gameRunning: false
            }

        case 'NEXT_PLAYER': {
            const playersCount = state.players.length
            const nextPlayerIndex = state.currentPlayerIndex + 1 < playersCount ? state.currentPlayerIndex + 1 : 0
            return {
                ...state,
                currentPlayerIndex: nextPlayerIndex
            }
        }

        case 'PREV_PLAYER': {
            const playersCount = state.players.length
            const prevPlayerIndex = state.currentPlayerIndex - 1 >= 0 ? state.currentPlayerIndex - 1 : playersCount - 1
            return {
                ...state,
                currentPlayerIndex: prevPlayerIndex
            }
        }

        case 'ENTER_SCORE': {
            const updatedPlayers = state.players
            updatedPlayers[state.currentPlayerIndex].score.push(action.score)
            return {
                ...state,
                players: updatedPlayers
            }
        }

        default:
            return state
    }
}
