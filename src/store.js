import { createStore, combineReducers } from 'redux'
import playerReducer from './reducers/player'
import gameReducer from './reducers/game'

export default () => {
    const store = createStore(
        combineReducers({
            playerList: playerReducer,
            game: gameReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}
