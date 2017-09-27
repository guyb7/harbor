import React, { Component } from 'react'

import { Button, Dropdown, Form, List } from 'semantic-ui-react'
import NewActionItemForm from './NewActionItemForm/'
import ActionItem from './ActionItem/'
import style from './style'

class ActionItems extends Component {
  render() {
    return (
      <div style={style.container}>
        <NewActionItemForm />
        <List divided relaxed='very' verticalAlign='middle'>
        {
          this.props.items.map(item => <ActionItem item={item} key={item.id} />)
        }
        </List>
      </div>
    )
  }
}

export default ActionItems
