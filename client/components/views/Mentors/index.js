import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import MentorCard from '../../Mentor/Card'
import { Grid, Input } from 'semantic-ui-react'
import mentorAvatar1 from '../../../assets/addyosmani.png'
import mentorAvatar2 from '../../../assets/gaearon.jpg'
import mentorAvatar3 from '../../../assets/notwaldorf.jpg'
import mentorAvatar4 from '../../../assets/torvalds.jpg'
import style from './style'

class Mentors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mentors: []
    }
  }

  componentDidMount() {
    this.props.dispatch(actions.setTitle('2018 Mentors'))
    this.loadMentors()
  }

  loadMentors() {
    this.setState({
      ...this.state,
      mentors: [
        {
          id: 'marlin-kertzmann',
          name: 'Marlin Kertzmann',
          avatar: mentorAvatar1,
          description: 'Brain Surgeon',
          labels: ['Health', 'Medical']
        }, {
          id: 'gaston-little',
          name: 'Gaston Little',
          avatar: mentorAvatar2,
          description: 'Software Architect',
          labels: ['Software']
        }, {
          id: 'jessyca-kunde',
          name: 'Jessyca Kunde',
          avatar: mentorAvatar3,
          description: 'Lawyer, Real Estate',
          labels: ['Real Estate']
        }, {
          id: 'gerry-kunde',
          name: 'Gerry Kunde',
          avatar: mentorAvatar4,
          description: 'Investor',
          labels: ['Angel']
        }, {
          id: 'marlin-kertzmann',
          name: 'Marlin Kertzmann',
          avatar: mentorAvatar1,
          description: 'Brain Surgeon',
          labels: ['Health', 'Medical']
        }, {
          id: 'gaston-little',
          name: 'Gaston Little',
          avatar: mentorAvatar2,
          description: 'Software Architect',
          labels: ['Software']
        }, {
          id: 'jessyca-kunde',
          name: 'Jessyca Kunde',
          avatar: mentorAvatar3,
          description: 'Lawyer, Real Estate',
          labels: ['Real Estate']
        }, {
          id: 'gerry-kunde',
          name: 'Gerry Kunde',
          avatar: mentorAvatar4,
          description: 'Investor',
          labels: ['Angel']
        }, {
          id: 'marlin-kertzmann',
          name: 'Marlin Kertzmann',
          avatar: mentorAvatar1,
          description: 'Brain Surgeon',
          labels: ['Health', 'Medical']
        }, {
          id: 'gaston-little',
          name: 'Gaston Little',
          avatar: mentorAvatar2,
          description: 'Software Architect',
          labels: ['Software']
        }, {
          id: 'jessyca-kunde',
          name: 'Jessyca Kunde',
          avatar: mentorAvatar3,
          description: 'Lawyer, Real Estate',
          labels: ['Real Estate']
        }, {
          id: 'gerry-kunde',
          name: 'Gerry Kunde',
          avatar: mentorAvatar4,
          description: 'Investor',
          labels: ['Angel']
        }
      ]
    })
  }

  render() {
    return (
      <div style={style.container}>
        <Input fluid icon='search' placeholder='Search...' style={style.search} />
        <Grid>
          {
            this.state.mentors.map((s, n) => (
              <Grid.Column mobile={16} tablet={8} computer={5} key={n}>
                <MentorCard mentor={s} />
              </Grid.Column>)
            )
          }
        </Grid>
      </div>
    )
  }
}

export default connect()(Mentors)
