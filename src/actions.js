import { v4 as uuid } from 'uuid'

export const enterScore = ({score = ''}) => ({
    type: 'ENTER_SCORE',
    score
})

export const setGameType = ({gameType = 301}) => ({
    type: 'SET_GAME_TYPE',
    gameType
})

export const startGame = () => ({
    type: 'START_GAME'
})

export const endGame = () => ({
    type: 'END_GAME'
})

export const nextPlayer = () => ({
    type: 'NEXT_PLAYER'
})

export const prevPlayer = () => ({
    type: 'PREV_PLAYER'
})

export const addPlayer = ({
    name = 'Annonymous',
    score = []
} = {}) => ({
    type: 'ADD_PLAYER',
    player: {
        id: uuid(),
        name,
        score
    }
})

export const removePlayer = ({id}) => ({
    type: 'REMOVE_PLAYER',
    id
})
