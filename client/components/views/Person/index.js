import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import { Image, Label, List } from 'semantic-ui-react'
import PersonListItem from '../../Person/ListItem'
import startupLogo2 from '../../../assets/startup-reesio.png'
import userAvatar4 from '../../../assets/user4.jpg'
import userAvatar5 from '../../../assets/user5.jpg'
import style from './style'

const people = {
  'otis-cruickshank': {
    id: 'otis-cruickshank',
    name: 'Otis Cruickshank',
    type: 'startup-member',
    avatar: userAvatar5,
    description: 'Reesio, CTO',
    labels: ['Developer', 'Hardware'],
    description_long: 'Reesio, CTO, Reesio, CTO, Reesio, CTO, Reesio, CTO',
    startup: {
      id: 'reesio',
      name: 'Reesio',
      logo: startupLogo2,
      description: 'Online real estate',
      labels: ['Real Estate']
    }
  },
  'gerry-kunde': {
    id: 'gerry-kunde',
    name: 'Gerry Kunde',
    type: 'mentor',
    avatar: userAvatar4,
    description: 'Investor',
    labels: ['Angel'],
    description_long: 'Reesio, CTO, Reesio, CTO, Reesio, CTO, Reesio, CTO',
  }
}

class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch(actions.setRouteInfo(this.props))
    this.loadProfile()
  }

  loadProfile() {
    const person = people[this.props.match.params.id]
    this.props.dispatch(actions.setTitle(person.name))
    this.setState({
      ...this.state,
      ...person
    })
  }

  render() {
    return (
      <div style={style.container}>
        <div style={style.header}>
          <div>
            <h1>{this.state.name}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Person)
