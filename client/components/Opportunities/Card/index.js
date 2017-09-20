import React, { Component } from 'react'

import { Button, Card, Image } from 'semantic-ui-react'
import style from './style'

class OpportunityCard extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src={this.props.logo} />
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Meta>{this.props.provider}</Card.Meta>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic floated="right">Details</Button>
        </Card.Content>
      </Card>
    )
  }
}

export default OpportunityCard
