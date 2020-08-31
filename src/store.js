import { createStore, combineReducers } from 'redux'
import playerReducer from './reducers/player'

export default () => {
    const store = createStore(
        combineReducers({
            playerList: playerReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}
