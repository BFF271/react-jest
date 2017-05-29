import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux'

import thunk from 'redux-thunk'

import reducer from 'ducks/root'
import App from 'components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('app')
)
