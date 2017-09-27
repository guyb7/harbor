import React, { Component } from 'react'
import moment from 'moment'

import { Checkbox, Form, Image } from 'semantic-ui-react'
import style from './style'

class ActionItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.item.status === 'done'
    }
  }

  toggle() {
    this.setState({
      checked: !this.state.checked
    })
  }

  getLabelStyle() {
    return {
      ...style.label,
      ...(this.state.checked ? style.checked : {})
    }
  }

  getDateRelativeText(date) {
    if (this.state.checked) {
      return 'Done'
    }
    return 'Due ' + moment(date, 'YYYY-MM-DD').fromNow()
  }

  render() {
    const item = this.props.item
    return <Form>
      <Form.Field>
        <Form.Group inline style={style.container}>
          <Checkbox
            style={style.labelContainer}
            label={<label style={this.getLabelStyle()}>{item.description}</label>}
            onChange={() => this.toggle()}
            checked={this.state.checked}>
            </Checkbox>
            <Image avatar src={item.user.avatar} />
            <div style={style.dueDate}>{this.getDateRelativeText(item.due_date)}</div>
        </Form.Group>
      </Form.Field>
    </Form>
  }
}

export default ActionItem
