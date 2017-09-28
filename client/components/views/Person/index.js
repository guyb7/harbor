import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import { Divider, Image, Item, Label, List } from 'semantic-ui-react'
import PersonListItem from '../../Person/ListItem'
import StartupItem from '../../Startup/Item'
import startupLogo2 from '../../../assets/placeholder.png'
// import startupLogo2 from '../../../assets/startup-reesio.png'
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
    title: 'Investor',
    labels: ['Angel'],
    description: 'Reesio, CTO, Reesio, CTO, Reesio, CTO, Reesio, CTO',
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
      startup: null,
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
            {
              this.state.startup && <div>
                <Divider section />
                <StartupItem startup={this.state.startup} />
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
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Person)
