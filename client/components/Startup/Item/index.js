import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { Item, Image, Label } from 'semantic-ui-react'
import style from './style'

class StartupCard extends Component {
  navigateToStartupPage() {
    this.props.history.push('/startups/' + this.props.startup.id)
  }

  render() {
    const startup = this.props.startup
    return (
      <Item.Group>
        <Item as='a' onClick={() => this.navigateToStartupPage()}>
          <Item.Image style={style.startupLogo} src={startup.logo} />
          <Item.Content>
            <Item.Header>{startup.name}</Item.Header>
            <Item.Meta>{startup.description}</Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}

export default withRouter(StartupCard)
