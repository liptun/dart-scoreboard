import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { addPlayer, startGame, playerHit } from './actions'
import './icons.font'

import './styles/reset.scss'
import './styles/main.scss'

import Router from './Router'
import configureStore from './store'
const store = configureStore()

store.dispatch(addPlayer({ name: 'LiptuN' }))
store.dispatch(addPlayer({ name: 'Zivcio' }))
store.dispatch(startGame())
store.dispatch(playerHit({ score: 20 }))
store.dispatch(playerHit({ score: 69 }))
store.dispatch(playerHit({ score: 21 }))
store.dispatch(playerHit({ score: 5 }))
store.dispatch(playerHit({ score: 37 }))
store.dispatch(playerHit({ score: 57 }))
store.dispatch(playerHit({ score: 117 }))

const jsx = (
    <Provider store={store}>
        <Router />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
