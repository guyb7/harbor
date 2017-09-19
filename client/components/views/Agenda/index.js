import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import Calendar from '../../Calendar'
import style from './style'

class Agenda extends Component {
  componentDidMount() {
    this.props.dispatch(actions.setTitle('8200 Agenda 2018'))
  }

  render() {
    return (
      <div style={style.container}>
        <h4>January</h4>
        <Calendar events={[]} />

        <h4>February</h4>
        <Calendar events={[]} />

        <h4>March</h4>
        <Calendar events={[]} />

        <h4>April</h4>
        <Calendar events={[]} />
      </div>
    )
  }
}

export default connect()(Agenda)
