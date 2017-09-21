import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { Card, Image, Label } from 'semantic-ui-react'
import startupLogo1 from '../../../assets/startup-canva.png'
import style from './style'

class StartupCard extends Component {
  navigateToStartupPage() {
    this.props.history.push('/startups/' + this.props.startup.id)
  }

  render() {
    const startup = this.props.startup
    return (
      <Card onClick={() => this.navigateToStartupPage()}>
        <div style={style.imageContainer}>
          <Image height={150} src={startup.logo} style={style.image}/>
        </div>
        <Card.Content>
          <Card.Header>
            {startup.name}
          </Card.Header>
          <Card.Meta>
            {startup.description}
          </Card.Meta>
          <Card.Description>
            {
              startup.labels.map(l => <Label horizontal key={l}>{l}</Label>)
            }
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default withRouter(StartupCard)
