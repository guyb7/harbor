import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import Activities from '../../Activities/'
import startupLogo2 from '../../../assets/startup-reesio.png'
import mentorAvatar2 from '../../../assets/user2.jpg'
import userAvatar1 from '../../../assets/user1.png'
import userAvatar4 from '../../../assets/user4.jpg'
import userAvatar5 from '../../../assets/user5.jpg'
import style from './style'

class StartupActivity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 'reesio',
      name: 'Reesio',
      logo: startupLogo2,
      activity_items: [
        {
          id: '1234',
          datetime: '2017-09-26 08:30:45',
          user: {
            id: 'marlin-kertzmann',
            name: 'Marlin Kertzmann',
            avatar: userAvatar1
          },
          type: 'action-item-done',
          description: 'Completed: Write a business plan',
          link: null
        }, {
          id: '1235',
          datetime: '2017-09-25 19:10:15',
          user: {
            id: 'gaston-little',
            name: 'Gaston Little',
            avatar: mentorAvatar2
          },
          type: 'meeting',
          description: 'Meeting with Gaston Little',
          link: null
        }, {
          id: '1236',
          datetime: '2017-09-21 19:10:15',
          user: {
            id: 'gaston-little',
            name: 'Gaston Little',
            avatar: mentorAvatar2
          },
          type: 'meeting',
          description: 'Meeting with Gaston Little',
          link: null
        }
      ]
    }
  }

  componentDidMount() {
    this.props.dispatch(actions.setTitle(this.state.name + ' Activity'))
    this.props.dispatch(actions.setRouteInfo(this.props))
    this.loadStartupActivity()
  }

  loadStartupActivity() {
  }

  getActivitiesByDay() {
    return [
      {
        date: 'Yesterday, Sep 26, 2017',
        activities: this.state.activity_items.map(i => ({
          id: i.id,
          avatar: i.user.avatar,
          description: i.description
        }))
      }, {
        date: '2 days ago, Sep 25, 2017',
        activities: this.state.activity_items.map(i => ({
          id: i.id,
          avatar: i.user.avatar,
          description: i.description
        }))
      }, {
        date: '6 days ago, Sep 21, 2017',
        activities: this.state.activity_items.map(i => ({
          id: i.id,
          avatar: i.user.avatar,
          description: i.description
        }))
      }
    ]
  }

  render() {
    return (
      <div style={style.container}>
        <Activities days={this.getActivitiesByDay()} />
      </div>
    )
  }
}

export default connect()(StartupActivity)
