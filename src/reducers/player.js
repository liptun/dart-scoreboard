const playersReducerDefaultState = []

export default (state = playersReducerDefaultState, action) => {
    console.log('Player reducer call', action)
    switch (action.type) {

        case 'ADD_PLAYER':
            return [
                ...state,
                action.player
            ]

        case 'REMOVE_PLAYER':
            return state.filter( ({ id }) => id !== action.id )

        default:
            return state
    }
}
