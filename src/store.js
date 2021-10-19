import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import gameReducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = () => {
    const store = createStore(
        combineReducers({
            game: gameReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}

export default store
