import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { Image, List } from 'semantic-ui-react'
import style from './style'

class PersonListItem extends Component {
  navigateToProfile() {
    this.props.history.push('/people/' + this.props.person.id)
  }

  render() {
    const person = this.props.person
    return (
      <List.Item onClick={() => this.navigateToProfile()} style={style.container}>
        <Image avatar src={person.avatar} />
        <List.Content>
          <List.Header>{person.name}</List.Header>
          <List.Description>{person.title}</List.Description>
        </List.Content>
      </List.Item>
    )
  }
}

export default withRouter(PersonListItem)
