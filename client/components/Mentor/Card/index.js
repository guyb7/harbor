import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { Card, Image, Label } from 'semantic-ui-react'
import style from './style'

class MentorCard extends Component {
  navigateTomentorPage() {
    this.props.history.push('/people/' + this.props.mentor.id)
  }

  render() {
    const mentor = this.props.mentor
    return (
      <Card onClick={() => this.navigateTomentorPage()}>
        <div style={style.imageContainer}>
          <Image height={150} src={mentor.avatar} style={style.image}/>
        </div>
        <Card.Content>
          <Card.Header>
            {mentor.name}
          </Card.Header>
          <Card.Meta>
            {mentor.description}
          </Card.Meta>
          <Card.Description>
            {
              mentor.labels.map(l => <Label horizontal key={l}>{l}</Label>)
            }
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default withRouter(MentorCard)
