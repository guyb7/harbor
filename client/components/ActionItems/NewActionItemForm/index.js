import React, { Component } from 'react'
import moment from 'moment'

import { Button, Dropdown, Form, List, Input, Select } from 'semantic-ui-react'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates'
import userAvatar1 from '../../../assets/user1.png'
import userAvatar5 from '../../../assets/user5.jpg'
import style from './style'

class NewActionItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dueDate: null, //moment()
      dueDateFocused: false
    }
  }

  onDueDateChange(date) {
    this.setState(state => ({
      ...state,
      dueDate: date
    }))
  }

  onDateFocusChange(focused) {
    this.setState(state => ({
      ...state,
      dueDateFocused: focused
    }))
  }

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
      <Form style={style.container} onSubmit={(e, data) => { this.addNewItem(e, data)}}>
        <style>
          {style.newItemFormAssignOverride}
          {style.dueDateOverride}
        </style>
        <Form.Group>
          <Form.Input placeholder='Add new item' className="flex-1" />
          <Dropdown placeholder='Assign to' inline options={this.getUsersOptions()} style={style.newItemFormAssign} />
          <Form.Field>
            <SingleDatePicker
              placeholder='Due date'
              date={this.state.dueDate}
              onDateChange={ date => { this.onDueDateChange(date) }}
              focused={this.state.dueDateFocused}
              onFocusChange={ ({ focused }) => this.onDateFocusChange(focused) }
              numberOfMonths={1}
              hideKeyboardShortcutsPanel
            />
          </Form.Field>
          <Button type='submit'>Add</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default NewActionItemForm
