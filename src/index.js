import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { addPlayer } from './actions'

import './styles/reset.scss'

import Router from './Router'
import configureStore from './store'
const store = configureStore()


store.dispatch(addPlayer({name: 'LiptuN'}))
store.dispatch(addPlayer())
store.dispatch(addPlayer({name: 'Zivcio'}))

// store.subscribe(() => {
//   const state = store.getState()
//   if ( state.game.gameRunning ) {
//     state.game.players.forEach((player, index) => {
//       const points = player.score.reduce((prev, next) => prev + next, 0)
//       if ( state.game.gameType - points === 0 ) {
//         console.log('Game ended')
//       }
//     })
//   }
// })

const jsx = (
  <Provider store={store}>
    <Router />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
