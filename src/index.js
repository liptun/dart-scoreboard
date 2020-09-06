import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { addPlayer, startGame } from './actions'
import './icons.font'

import './styles/reset.scss'
import './styles/main.scss'

import Router from './Router'
import configureStore from './store'
const store = configureStore()

store.dispatch(addPlayer({ name: 'LiptuN' }))
store.dispatch(addPlayer({ name: 'Zivcio' }))
store.dispatch(startGame())

const jsx = (
    <Provider store={store}>
        <Router />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
