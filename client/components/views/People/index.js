import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import PersonCard from '../../Person/Card'
import { Grid, Input } from 'semantic-ui-react'
import userAvatar1 from '../../../assets/user1.png'
import userAvatar2 from '../../../assets/user2.jpg'
import userAvatar3 from '../../../assets/user3.jpg'
import userAvatar4 from '../../../assets/user4.jpg'
import userAvatar5 from '../../../assets/user5.jpg'
import userAvatar6 from '../../../assets/user6.jpg'
import userAvatar7 from '../../../assets/user7.png'
import userAvatar8 from '../../../assets/user8.jpg'
import style from './style'

class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    this.props.dispatch(actions.setTitle('All 2018 Members'))
    this.loadPeople()
  }

  loadPeople() {
    this.setState({
      ...this.state,
      people: [
        {
          id: 'otis-cruickshank',
          name: 'Otis Cruickshank',
          avatar: userAvatar5,
          description: 'Reesio, CTO',
          labels: ['Developer', 'Hardware']
        }, {
          id: 'vada-veum',
          name: 'Vada Veum',
          avatar: userAvatar6,
          description: 'Reesio, Sales',
          labels: ['Marketing', 'Biz-Dev']
        }, {
          id: 'gerry-kunde',
          name: 'Gerry Kunde',
          avatar: userAvatar4,
          description: 'Investor',
          labels: ['Angel']
        }, {
          id: 'favian-skiles',
          name: 'Favian Skiles',
          avatar: userAvatar7,
          description: 'Tuna, Designer',
          labels: ['Disgner']
        }, {
          id: 'marlin-kertzmann',
          name: 'Marlin Kertzmann',
          avatar: userAvatar1,
          description: 'Brain Surgeon',
          labels: ['Health', 'Medical']
        }, {
          id: 'bradly-yost',
          name: 'Bradly Yost',
          avatar: userAvatar8,
          description: 'Software Architect',
          labels: ['Software']
        }, {
          id: 'otis-cruickshank',
          name: 'Otis Cruickshank',
          avatar: userAvatar5,
          description: 'Reesio, CTO',
          labels: ['Developer', 'Hardware']
        }, {
          id: 'vada-veum',
          name: 'Vada Veum',
          avatar: userAvatar6,
          description: 'Reesio, Sales',
          labels: ['Marketing', 'Biz-Dev']
        }, {
          id: 'gerry-kunde',
          name: 'Gerry Kunde',
          avatar: userAvatar4,
          description: 'Investor',
          labels: ['Angel']
        }, {
          id: 'favian-skiles',
          name: 'Favian Skiles',
          avatar: userAvatar7,
          description: 'Tuna, Designer',
          labels: ['Disgner']
        }, {
          id: 'marlin-kertzmann',
          name: 'Marlin Kertzmann',
          avatar: userAvatar1,
          description: 'Brain Surgeon',
          labels: ['Health', 'Medical']
        }, , {
          id: 'bradly-yost',
          name: 'Bradly Yost',
          avatar: userAvatar8,
          description: 'Software Architect',
          labels: ['Software']
        }, {
          id: 'otis-cruickshank',
          name: 'Otis Cruickshank',
          avatar: userAvatar5,
          description: 'Reesio, CTO',
          labels: ['Developer', 'Hardware']
        }, {
          id: 'vada-veum',
          name: 'Vada Veum',
          avatar: userAvatar6,
          description: 'Reesio, Sales',
          labels: ['Marketing', 'Biz-Dev']
        }, {
          id: 'gerry-kunde',
          name: 'Gerry Kunde',
          avatar: userAvatar4,
          description: 'Investor',
          labels: ['Angel']
        }, {
          id: 'favian-skiles',
          name: 'Favian Skiles',
          avatar: userAvatar7,
          description: 'Tuna, Designer',
          labels: ['Disgner']
        }, {
          id: 'marlin-kertzmann',
          name: 'Marlin Kertzmann',
          avatar: userAvatar1,
          description: 'Brain Surgeon',
          labels: ['Health', 'Medical']
        }, , {
          id: 'bradly-yost',
          name: 'Bradly Yost',
          avatar: userAvatar8,
          description: 'Software Architect',
          labels: ['Software']
        }, {
          id: 'otis-cruickshank',
          name: 'Otis Cruickshank',
          avatar: userAvatar5,
          description: 'Reesio, CTO',
          labels: ['Developer', 'Hardware']
        }, {
          id: 'vada-veum',
          name: 'Vada Veum',
          avatar: userAvatar6,
          description: 'Reesio, Sales',
          labels: ['Marketing', 'Biz-Dev']
        }, {
          id: 'gerry-kunde',
          name: 'Gerry Kunde',
          avatar: userAvatar4,
          description: 'Investor',
          labels: ['Angel']
        }, {
          id: 'favian-skiles',
          name: 'Favian Skiles',
          avatar: userAvatar7,
          description: 'Tuna, Designer',
          labels: ['Disgner']
        }, {
          id: 'marlin-kertzmann',
          name: 'Marlin Kertzmann',
          avatar: userAvatar1,
          description: 'Brain Surgeon',
          labels: ['Health', 'Medical']
        }, , {
          id: 'bradly-yost',
          name: 'Bradly Yost',
          avatar: userAvatar8,
          description: 'Software Architect',
          labels: ['Software']
        }, {
          id: 'otis-cruickshank',
          name: 'Otis Cruickshank',
          avatar: userAvatar5,
          description: 'Reesio, CTO',
          labels: ['Developer', 'Hardware']
        }, {
          id: 'vada-veum',
          name: 'Vada Veum',
          avatar: userAvatar6,
          description: 'Reesio, Sales',
          labels: ['Marketing', 'Biz-Dev']
        }, {
          id: 'gerry-kunde',
          name: 'Gerry Kunde',
          avatar: userAvatar4,
          description: 'Investor',
          labels: ['Angel']
        }, {
          id: 'favian-skiles',
          name: 'Favian Skiles',
          avatar: userAvatar7,
          description: 'Tuna, Designer',
          labels: ['Disgner']
        }, {
          id: 'marlin-kertzmann',
          name: 'Marlin Kertzmann',
          avatar: userAvatar1,
          description: 'Brain Surgeon',
          labels: ['Health', 'Medical']
        }, , {
          id: 'bradly-yost',
          name: 'Bradly Yost',
          avatar: userAvatar8,
          description: 'Software Architect',
          labels: ['Software']
        }, {
          id: 'otis-cruickshank',
          name: 'Otis Cruickshank',
          avatar: userAvatar5,
          description: 'Reesio, CTO',
          labels: ['Developer', 'Hardware']
        }, {
          id: 'vada-veum',
          name: 'Vada Veum',
          avatar: userAvatar6,
          description: 'Reesio, Sales',
          labels: ['Marketing', 'Biz-Dev']
        }, {
          id: 'gerry-kunde',
          name: 'Gerry Kunde',
          avatar: userAvatar4,
          description: 'Investor',
          labels: ['Angel']
        }, {
          id: 'favian-skiles',
          name: 'Favian Skiles',
          avatar: userAvatar7,
          description: 'Tuna, Designer',
          labels: ['Disgner']
        }, {
          id: 'marlin-kertzmann',
          name: 'Marlin Kertzmann',
          avatar: userAvatar1,
          description: 'Brain Surgeon',
          labels: ['Health', 'Medical']
        }, {
          id: 'bradly-yost',
          name: 'Bradly Yost',
          avatar: userAvatar8,
          description: 'Software Architect',
          labels: ['Software']
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
            this.state.people.map((s, n) => (
              <Grid.Column mobile={16} tablet={8} computer={4} key={n}>
                <PersonCard person={s} />
              </Grid.Column>)
            )
          }
        </Grid>
      </div>
    )
  }
}

export default connect()(People)
