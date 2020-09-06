const gameReducerDefaultState = {
    gameType: 101,
    gameRunning: false,
    gameTurn: 0,
    currentPlayerIndex: 0,
    winner: undefined,
    players: [],
}

export default (state = gameReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            return {
                ...state,
                players: state.players.concat(action.player),
            }

        case 'REMOVE_PLAYER':
            return {
                ...state,
                players: state.players.filter(({ id }) => id !== action.id),
            }

        case 'SET_GAME_TYPE':
            return {
                ...state,
                gameType: action.gameType,
            }

        case 'SET_WINNER':
            return {
                ...state,
                winner: state.players[state.currentPlayerIndex],
            }

        case 'CLEAR_WINNER':
            return {
                ...state,
                winner: undefined,
            }

        case 'START_GAME':
            return {
                ...state,
                currentPlayerIndex: 0,
                gameTurn: 0,
                gameRunning: true,
            }

        case 'END_GAME':
            return {
                ...state,
                gameRunning: false,
            }

        case 'NEXT_PLAYER': {
            const playersCount = state.players.length
            const nextPlayerIndex =
                state.currentPlayerIndex + 1 < playersCount
                    ? state.currentPlayerIndex + 1
                    : 0
            return {
                ...state,
                currentPlayerIndex: nextPlayerIndex,
            }
        }

        case 'PREV_PLAYER': {
            const playersCount = state.players.length
            const prevPlayerIndex =
                state.currentPlayerIndex - 1 >= 0
                    ? state.currentPlayerIndex - 1
                    : playersCount - 1
            return {
                ...state,
                currentPlayerIndex: prevPlayerIndex,
            }
        }

        case 'ENTER_SCORE': {
            const updatedPlayers = state.players
            updatedPlayers[state.currentPlayerIndex].score.push(action.score)
            return {
                ...state,
                players: updatedPlayers,
                gameTurn: state.gameTurn + 1,
            }
        }

        case 'UNDO_LAST_SCORE': {
            const updatedPlayers = state.players
            updatedPlayers[state.currentPlayerIndex].score.pop()
            return {
                ...state,
                players: updatedPlayers,
                gameTurn: state.gameTurn - 1,
            }
        }

        case 'CLEAR_SCORE': {
            const updatedPlayers = state.players
            updatedPlayers.forEach((player) => {
                player.score = []
            })
            return {
                ...state,
                players: updatedPlayers,
            }
        }

        default:
            return state
    }
}
