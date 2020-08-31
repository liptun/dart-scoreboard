import dartHit from './libs/dartHit'

const gameReducerDefaultState = {
    gameType: 301,
    gameRunning: false,
    currentPlayer: 0,
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

        case 'START_GAME':
            return {
                ...state,
                currentPlayer: 0,
                gameRunning: true
            }

        case 'END_GAME':
            return {
                ...state,
                gameRunning: false
            }

        case 'NEXT_PLAYER':
            const playersCount = state.players.length
            const nextPlayerIndex = state.currentPlayer + 1 < playersCount ? state.currentPlayer + 1 : 0
            return {
                ...state,
                currentPlayer: nextPlayerIndex
            }

        case 'PREV_PLAYER':
            return {
                ...state
            }

        case 'ENTER_SCORE':
            return {
                ...state,
                players: state.players.map((player, index) => {
                    if ( index === state.currentPlayer ) {
                        return {
                            ...player,
                            score: [
                                ...player.score,
                                dartHit(action.score)
                            ]
                        }
                    }
                    return player
                })
            }

        default:
            return state
    }
}
