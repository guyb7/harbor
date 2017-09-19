import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import style from './style'

class NotFound extends Component {
  componentDidMount() {
    this.props.dispatch(actions.setTitle('Not Found'))
  }

  render() {
    return (
      <div style={style.container}>
        404 :(
      </div>
    )
  }
}

export default connect()(NotFound)
