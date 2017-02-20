import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import routes from './modules/routes'
import configureStore from './modules/configureStore'

// let store = createStore(todoApp)
const store = configureStore()

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('app')
)
