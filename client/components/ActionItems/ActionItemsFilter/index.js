import React, { Component } from 'react'

import { Menu } from 'semantic-ui-react'
import style from './style'

class ActionItemsFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: ['all', 'active', 'done'],
      activeItem: 'all'
    }
  }

  handleItemClick(name) {
    this.setState({
      ...this.state,
      activeItem: name
    })
  }

  render() {
    const { activeItem } = this.state
    return <Menu pointing secondary size='mini' style={style.container}>
      {
        this.state.tabs.map(t => <Menu.Item
          key={t}
          name={t}
          active={activeItem === t}
          onClick={(e, { name }) => this.handleItemClick(name)} />
        )
      }
    </Menu>
  }
}

export default ActionItemsFilter
