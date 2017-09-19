import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import * as reducers from './reducers'

export default data => {
  const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk),
    data,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  return store
}
