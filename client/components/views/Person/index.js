import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import { Button, Divider, Image, Item, Label, List } from 'semantic-ui-react'
import PersonListItem from '../../Person/ListItem'
import StartupItem from '../../Startup/Item'
import startupLogo1 from '../../../assets/startup-canva.png'
import startupLogo2 from '../../../assets/startup-reesio.png'
import startupLogo3 from '../../../assets/startup-tuna.jpg'
import userAvatar4 from '../../../assets/user4.jpg'
import userAvatar5 from '../../../assets/user5.jpg'
import style from './style'

const people = {
  'otis-cruickshank': {
    id: 'otis-cruickshank',
    name: 'Otis Cruickshank',
    type: 'startup-member',
    avatar: userAvatar5,
    title: 'Reesio, CTO',
    labels: ['Developer', 'Hardware'],
    description: `I'm Otis, softwar engineer and designer, working in web development and print media. If you have a project that needs some complex architecture then that’s where I come in!

My job is to design and build modern systems so that everything is functional and user-friendly. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use.`,
    links: [
      { icon: 'mail', content: 'otis@gmail.com', link: 'mailto:otis@gmail.com' },
      { icon: 'github', content: 'otis42' },
      { icon: 'linkedin', content: 'Otis Cruickshank' },
      { content: 'Website' }
    ],
    startups: [{
      id: 'reesio',
      name: 'Reesio',
      logo: startupLogo2,
      description: 'Online real estate',
      labels: ['Real Estate']
    }]
  },
  'gerry-kunde': {
    id: 'gerry-kunde',
    name: 'Gerry Kunde',
    type: 'mentor',
    avatar: userAvatar4,
    title: 'Investor',
    labels: ['Angel'],
    description: `Gerry has over 25-years of experience investing in the transformation of energy markets and the development of lower carbon energy solutions, both as a principal investor and as a corporate and project financier.

He ran the investment business of Climate Change Capital (CCC) in China until 2010, funding the development of clean energy and emission reduction projects through the adoption of innovative technology solutions. He managed an investment portfolio of over €500m.`,
    links: [
      { icon: 'mail', content: 'gerry@kundleinvestments.com', link: 'mailto:gerry@kundleinvestments.com' },
      { icon: 'linkedin', content: 'Gerry Kunde' },
    ],
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
      }
    ]
  }
}

class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      name: null,
      type: null,
      avatar: null,
      title: null,
      labels: [],
      description: null,
      links: [],
      startups: []
    }
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
            <div style={style.avatarContainer}>
              <Image src={this.state.avatar} style={style.avatar} />
              {
                this.state.type === 'mentor' && <Label color='blue' attached='bottom left'>Mentor</Label>
              }
              {
                this.state.type === 'accelerator-member' && <Label color='red' attached='bottom left'>Accelerator Member</Label>
              }
            </div>
            <Button.Group basic fluid vertical>
              {
                this.props.user.type === 'startup-member' &&
                <Button content='Add Mentor' icon='pin' labelPosition='left' />
              }
              <Button content='Message' icon='mail outline' labelPosition='left' />
            </Button.Group>
            {
              this.state.startups && this.state.startups.length > 0 && <div>
                <Divider section />
                {
                  this.state.startups.map(s => <StartupItem startup={s} key={s.id} />)
                }
              </div>
            }
          </div>
          <div style={style.profile}>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Item.Header style={style.name}>{this.state.name}</Item.Header>
                  <Item.Meta>{this.state.title}</Item.Meta>
                </Item.Content>
              </Item>
              <Item style={style.description} description={this.state.description} />
            </Item.Group>
            <div>
              {
                this.state.labels.map(l => <Label horizontal key={l}>{l}</Label>)
              }
            </div>
            <List>
              {
                this.state.links.map((l, n) => <List.Item
                  key={n}
                  icon={l.icon || 'globe'}
                  content={<a href={l.link} target='_blank'>{l.content}</a>}
                />)
              }
            </List>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  user: state.user
}))(Person)
