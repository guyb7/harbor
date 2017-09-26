import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import { Image, Label, List } from 'semantic-ui-react'
import PersonListItem from '../../Person/ListItem'
import startupLogo2 from '../../../assets/startup-reesio.png'
import userAvatar1 from '../../../assets/user1.png'
import userAvatar4 from '../../../assets/user4.jpg'
import userAvatar5 from '../../../assets/user5.jpg'
import style from './style'

class Startup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 'reesio',
      name: 'Reesio',
      logo: startupLogo2,
      description: 'Online real estate',
      description_full: `Reesio is a modern transaction management system for today's busy real estate professional. With a simple, mobile-friendly design to delight both clients and transaction members, Reesio helps you streamline all of your transactions online, reduce legal liability, and eliminate paperwork and manual processes.`,
      looking_for: `We need a biz-dev with experience in the american real-estate market.`,
      labels: ['Real Estate', 'SaaS'],
      members: [{
          id: 'marlin-kertzmann',
          name: 'Marlin Kertzmann',
          avatar: userAvatar1,
          title: 'Product Manager'
        }, {
          id: 'otis-cruickshank',
          name: 'Otis Cruickshank',
          avatar: userAvatar5,
          title: 'CTO'
        }, {
          id: 'vada-veum',
          name: 'Vada Veum',
          avatar: userAvatar4,
          title: 'Sales'
      }]
    }
  }

  componentDidMount() {
    this.props.dispatch(actions.setTitle('Reesio'))
    this.props.dispatch(actions.setRouteInfo(this.props))
    this.loadStartupDetails()
  }

  loadStartupDetails() {
    console.log('startup id', this.props.match.params.id)
    this.setState({
      ...this.state
    })
  }

  render() {
    return (
      <div style={style.container}>
        <div style={style.header}>
          <div>
            <h1>{this.state.name}</h1>
            <div>
            {
              this.state.labels.map(l => <Label horizontal key={l}>{l}</Label>)
            }
            </div>
            <h3>{this.state.description}</h3>
            <p>
              {this.state.description_full}
            </p>
          </div>
          <div>
            <img style={style.logo} src={startupLogo2} alt={this.state.name + ' Logo'} />
            <List relaxed style={style.members}>
              {
                this.state.members.map(person => <PersonListItem person={person} key={person.id} />)
              }
            </List>
          </div>
        </div>
        <h3>Looking For</h3>
        <p>
          {this.state.looking_for}
        </p>
      </div>
    )
  }
}

export default connect()(Startup)
