import gameReducer from '../reducer'
import * as action from '../actions'

test('Create new player', () => {
    const newPlayerAction = action.addPlayer({ name: 'LiptuN' })
    const state = gameReducer(undefined, newPlayerAction)
    expect(state.players).toEqual([newPlayerAction.player])
})

test('Remove player', () => {
    const newPlayer = action.addPlayer({ name: 'LiptuN' }).player
    const defaultState = {
        players: [newPlayer],
    }
    const state = gameReducer(
        defaultState,
        action.removePlayer({ id: newPlayer.id })
    )
    expect(state.players).toEqual([])
})

test('Set game type to 501', () => {
    const state = gameReducer(undefined, action.setGameType({ gameType: 501 }))
    expect(state.gameType).toEqual(501)
})

test('Start game', () => {
    const state = gameReducer(undefined, action.startGame())
    expect(state.gameRunning).toEqual(true)
})

test('End game', () => {
    const state = gameReducer(undefined, action.endGame())
    expect(state.gameRunning).toEqual(false)
})

test('Next player', () => {
    const defaultState = {
        players: ['player1', 'player2'],
        currentPlayerIndex: 0,
    }
    const state = gameReducer(defaultState, action.nextPlayer())
    expect(state.currentPlayerIndex).toEqual(1)
})

test('Next player from last to begining', () => {
    const defaultState = {
        players: ['player1', 'player2'],
        currentPlayerIndex: 1,
    }
    const state = gameReducer(defaultState, action.nextPlayer())
    expect(state.currentPlayerIndex).toEqual(0)
})

test('Prev player', () => {
    const defaultState = {
        players: ['player1', 'player2'],
        currentPlayerIndex: 1,
    }
    const state = gameReducer(defaultState, action.prevPlayer())
    expect(state.currentPlayerIndex).toEqual(0)
})

test('Prev player from begining to last', () => {
    const defaultState = {
        players: ['player1', 'player2'],
        currentPlayerIndex: 0,
    }
    const state = gameReducer(defaultState, action.prevPlayer())
    expect(state.currentPlayerIndex).toEqual(1)
})

test('Prev player from begining to last with three players', () => {
    const defaultState = {
        players: ['player1', 'player2', 'player3'],
        currentPlayerIndex: 0,
    }
    const state = gameReducer(defaultState, action.prevPlayer())
    expect(state.currentPlayerIndex).toEqual(2)
})

test('Enter score', () => {
    const player1 = action.addPlayer().player
    const player2 = action.addPlayer().player
    const defaultState = {
        players: [player1, player2],
        currentPlayerIndex: 0,
    }
    const state = gameReducer(defaultState, action.enterScore({ score: 60 }))
    expect(state.players[0].score).toEqual([60])
})
