import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import ActionItems from '../../ActionItems/'
import userAvatar1 from '../../../assets/user1.png'
import userAvatar4 from '../../../assets/user4.jpg'
import userAvatar5 from '../../../assets/user5.jpg'
import style from './style'

class StartupActionItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 'reesio',
      name: 'Reesio',
      action_items: [
        {
          id: '1234',
          status: 'active',
          description: 'Write a business plan',
          due_date: '2017-10-14',
          user: {
            id: 'marlin-kertzmann',
            name: 'Marlin Kertzmann',
            avatar: userAvatar1
          }
        }, {
          id: '1235',
          status: 'active',
          description: 'Build a mockup',
          due_date: '2017-10-01',
          user: {
            id: 'otis-cruickshank',
            name: 'Otis Cruickshank',
            avatar: userAvatar5
          }
        }, {
          id: '1236',
          status: 'done',
          description: 'Marketing plan brainstorm',
          due_date: '2017-09-26',
          user: {
            id: 'otis-cruickshank',
            name: 'Otis Cruickshank',
            avatar: userAvatar5
          }
        }
      ]
    }
  }

  componentDidMount() {
    this.props.dispatch(actions.setTitle(this.state.name + ' Action Items'))
    this.props.dispatch(actions.setRouteInfo(this.props))
    this.loadStartupActionItems()
  }

  loadStartupActionItems() {
  }

  render() {
    return (
      <div style={style.container}>
        <ActionItems items={this.state.action_items} />
      </div>
    )
  }
}

export default connect()(StartupActionItems)
