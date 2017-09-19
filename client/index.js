import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import createStore from './store/create-store'
import 'semantic-ui-css/semantic.min.css'

import Layout from './components/Layout'
import style from './style'

const baseUrl = '/app'

class App extends Component {
  isLoggedIn() {
    return true
  }

  isLoggedOut() {
    return false
  }

  render() {
    return (
      <Provider store={ this.props.store }>
        <Router basename={baseUrl}>
          <div style={style.container}>
          {
            this.isLoggedIn() &&
            <Layout />
          }
          {
            this.isLoggedOut() &&
            <div style={style.container}>
              Login Screen
            </div>
          }
          </div>
        </Router>
      </Provider>
    )
  }
}

const store = createStore()
render(<App store={store} />, document.getElementById('root'))
