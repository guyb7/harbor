import React, { Component } from 'react'

import { Button, Dropdown, Form, List } from 'semantic-ui-react'
import ActionItem from './ActionItem/'
import userAvatar1 from '../../assets/user1.png'
import userAvatar5 from '../../assets/user5.jpg'
import style from './style'

class ActionItems extends Component {
  getUsersOptions() {
    return [
      { value: 'marlin-kertzmann', text: 'Marlin Kertzmann', image: userAvatar1 },
      { value: 'otis-cruickshank', text: 'Otis Cruickshank', image: userAvatar5 }
    ]
  }

  addNewItem(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div style={style.container}>
        <Form style={style.newItemForm} onSubmit={(e, data) => { this.addNewItem(e, data)}}>
          <Form.Group>
            <Form.Input placeholder='Add new item' width={6} />
            <Dropdown placeholder='Assign to' selection options={this.getUsersOptions()} style={style.newItemFormAssign} />
            <Form.Input placeholder='Due date' width={3} />
            <Button type='submit'>Add</Button>
          </Form.Group>
        </Form>
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
