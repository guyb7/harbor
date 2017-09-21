import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { Card, Image, Label } from 'semantic-ui-react'
import style from './style'

class PersonCard extends Component {
  navigateToProfile() {
    this.props.history.push('/people/' + this.props.person.id)
  }

  render() {
    const person = this.props.person
    return (
      <Card onClick={() => this.navigateToProfile()}>
        <div style={style.imageContainer}>
          <Image height={150} src={person.avatar} style={style.image}/>
        </div>
        <Card.Content>
          <Card.Header>
            {person.name}
          </Card.Header>
          <Card.Meta>
            {person.description}
          </Card.Meta>
          <Card.Description>
            {
              person.labels.map(l => <Label horizontal key={l}>{l}</Label>)
            }
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default withRouter(PersonCard)
