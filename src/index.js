import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { addPlayer } from './actions'

import './styles/reset.scss'

import Router from './Router'
import configureStore from './store'
const store = configureStore()

store.dispatch(addPlayer({ name: 'LiptuN' }))
store.dispatch(addPlayer())
store.dispatch(addPlayer({ name: 'Zivcio' }))

const jsx = (
    <Provider store={store}>
        <Router />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
