import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import StartupCard from '../../Startup/Card'
import { Grid } from 'semantic-ui-react'
import startupLogo1 from '../../../assets/startup-canva.png'
import startupLogo2 from '../../../assets/startup-reesio.png'
import startupLogo3 from '../../../assets/startup-tuna.jpg'
import style from './style'

class Startups extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startups: []
    }
  }

  componentDidMount() {
    this.props.dispatch(actions.setTitle('2018 Startups'))
    this.loadStartups()
  }

  loadStartups() {
    this.setState({
      ...this.state,
      startups: [
        {
          id: 'canva',
          name: 'Canva',
          logo: startupLogo1,
          description: 'Graphic design tool',
          labels: ['Design', 'Tools']
        }, {
          id: 'reesio',
          name: 'Reesio',
          logo: startupLogo2,
          description: 'Online real estate',
          labels: ['Real Estate']
        }, {
          id: 'tuna',
          name: 'Tuna',
          logo: startupLogo3,
          description: 'Musicians Collaboration',
          labels: ['Music']
        }, {
          id: 'canva',
          name: 'Canva',
          logo: startupLogo1,
          description: 'Graphic design tool',
          labels: ['Design', 'Tools']
        }, {
          id: 'reesio',
          name: 'Reesio',
          logo: startupLogo2,
          description: 'Online real estate',
          labels: ['Real Estate']
        }, {
          id: 'tuna',
          name: 'Tuna',
          logo: startupLogo3,
          description: 'Musicians Collaboration',
          labels: ['Music']
        }, {
          id: 'canva',
          name: 'Canva',
          logo: startupLogo1,
          description: 'Graphic design tool',
          labels: ['Design', 'Tools']
        }, {
          id: 'reesio',
          name: 'Reesio',
          logo: startupLogo2,
          description: 'Online real estate',
          labels: ['Real Estate']
        }, {
          id: 'tuna',
          name: 'Tuna',
          logo: startupLogo3,
          description: 'Musicians Collaboration',
          labels: ['Music']
        }, {
          id: 'canva',
          name: 'Canva',
          logo: startupLogo1,
          description: 'Graphic design tool',
          labels: ['Design', 'Tools']
        }, {
          id: 'reesio',
          name: 'Reesio',
          logo: startupLogo2,
          description: 'Online real estate',
          labels: ['Real Estate']
        }, {
          id: 'tuna',
          name: 'Tuna',
          logo: startupLogo3,
          description: 'Musicians Collaboration',
          labels: ['Music']
        }, 
      ]
    })
  }

  render() {
    return (
      <div style={style.container}>
        <Grid>
          {
            this.state.startups.map((s, n) => (
              <Grid.Column mobile={16} tablet={8} computer={4} key={n}>
                <StartupCard startup={s} />
              </Grid.Column>)
            )
          }
        </Grid>
      </div>
    )
  }
}

export default connect()(Startups)
