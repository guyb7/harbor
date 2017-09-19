import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import style from './style'

class Page1 extends Component {
  componentDidMount() {
    this.props.dispatch(actions.setTitle('Page 1'))
  }

  render() {
    return (
      <div style={style.container}>
        Page 1
      </div>
    )
  }
}

export default connect()(Page1)
