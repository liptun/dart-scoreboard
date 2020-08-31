import { createStore, combineReducers } from 'redux'
import playersReducer from './reducers/players'

export default () => {
    const store = createStore(
        combineReducers({
            player: playersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}
