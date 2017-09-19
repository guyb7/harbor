import React, { Component } from 'react'
import { connect } from 'react-redux'

import style from './style'

class PageHeader extends Component {
  render() {
    return (
      <div style={style.container}>
        <h1 style={style.title}>{this.props.title}</h1>
      </div>
    )
  }
}

export default connect(
  state => ({
    title: state.title.title
  })
)(PageHeader)
