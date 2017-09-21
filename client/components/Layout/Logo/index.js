import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

import style from './style'

class Logo extends Component {
  render() {
    return (
      <div style={style.container}>
        <Icon name='rocket' />
        Harbor
      </div>
    )
  }
}

export default Logo
