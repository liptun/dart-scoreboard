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
