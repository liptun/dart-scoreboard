import { v4 as uuid } from 'uuid'

export const playerHit = ({ score = 0 } = {}) => {
    return (dispatch, getState) => {
        const state = getState()
        const currentPlayerScore = state.game.players[
            state.game.currentPlayerIndex
        ].score.reduce((a, b) => a + b, 0)
        const scoreToWin = state.game.gameType - currentPlayerScore
        if (scoreToWin - score > 0) {
            dispatch(enterScore({ score }))
            dispatch(nextPlayer())
        } else if (scoreToWin - score === 0) {
            dispatch(enterScore({ score }))
            dispatch(setWinner())
        } else {
            dispatch(enterScore())
            dispatch(nextPlayer())
        }
    }
}

export const clearScore = () => ({
    type: 'CLEAR_SCORE',
})

export const setWinner = () => ({
    type: 'SET_WINNER',
})

export const clearWinner = () => ({
    type: 'CLEAR_WINNER',
})

export const enterScore = ({ score = 0 } = {}) => ({
    type: 'ENTER_SCORE',
    score,
})

export const setGameType = ({ gameType = 301 } = {}) => ({
    type: 'SET_GAME_TYPE',
    gameType,
})

export const startGame = () => ({
    type: 'START_GAME',
})

export const endGame = () => ({
    type: 'END_GAME',
})

export const nextPlayer = () => ({
    type: 'NEXT_PLAYER',
})

export const prevPlayer = () => ({
    type: 'PREV_PLAYER',
})

export const addPlayer = ({ name = 'Annonymous', score = [] } = {}) => ({
    type: 'ADD_PLAYER',
    player: {
        id: uuid(),
        name,
        score,
    },
})

export const removePlayer = ({ id } = {}) => ({
    type: 'REMOVE_PLAYER',
    id,
})

export const undoLastScore = () => ({
    type: 'UNDO_LAST_SCORE',
})

export const undoLast = () => {
    return (dispatch, getState) => {
        const gameTurns = getState().game.gameTurn
        if (gameTurns >= 1) {
            dispatch(prevPlayer())
            dispatch(undoLastScore())
        }
    }
}
