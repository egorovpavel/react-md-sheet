import React from 'react'
import App from './components/App'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import {reducersSheet} from 'react-md-sheet'

const combined = combineReducers({
  reducersSheet
})

const store = createStore(
  combined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDom.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
  , document.querySelector('#app'))
