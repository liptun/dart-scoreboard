import dartHit from './libs/dartHit'

const gameReducerDefaultState = {
    gameType: 301,
    gameRunning: false,
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

        case 'START_GAME':
            return {
                ...state,
                currentPlayer: state.players[0].id,
                gameRunning: true
            }

        case 'END_GAME':
            return {
                ...state,
                gameRunning: false
            }

        case 'ENTER_SCORE':
            return {
                ...state,
                players: state.players.map(player => {
                    if ( state.currentPlayer === player.id ) {
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
