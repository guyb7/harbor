import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import * as actions from '../../../store/action-creators'

import { Menu } from 'semantic-ui-react'
import style from './style'

class SideBar extends Component {
  setTitle(title, delay = 0) {
    if (delay > 0) {
      this.props.dispatch(actions.setTitleDelayed(title, delay))
    } else {
      this.props.dispatch(actions.setTitle(title))
    }
  }

  onItemClick(path) {
    if (path) {
      this.props.history.push(path)
    }
  }

  isCurrent(path) {
    return this.props.location.pathname === path
  }

  getItems() {
    let items = []
    if (this.props.location.pathname !== '/') {
      items.push(
        { path: '/', content: '← Back Home' }
      )
    }
    items.push(
      // { path: '/agenda', content: 'Agenda' },
      // { path: '/opportunities', content: 'Opportunities' },
      // { path: '/startups', content: 'Start-Ups' },
      // { path: '/mentors', content: 'Mentors' },
      {
        header: '8200',
        items: [
          { path: '/', content: 'Home' },
          { path: '/agenda', content: 'Agenda' },
          { path: '/opportunities', content: 'Opportunities' },
          { path: '/startups', content: 'Start-Ups' },
          { path: '/mentors', content: 'Mentors' }
        ]
      },
      {
        header: 'Reesio',
        items: [
          { path: '/startups/reesio', content: 'Reesio Home' },
          { path: '/startups/reesio/activity', content: 'Activity' },
          { path: '/startups/reesio/files', content: 'Files' }
        ]
      },
      {
        header: 'You',
        items: [
          { path: '/user/profile', content: 'Profile' },
          { path: '/user/action-items', content: 'Action Items' }
        ]
      }
    )
    return this.buildItems(items)
  }

  getItemStyle(item) {
    if (this.isCurrent(item.path)) {
      return _.defaults(style.menuItemActive, style.menuItem)
    } else {
      return style.menuItem
    }
  }

  buildItems(items) {
    return _.map(items, (i, n) => {
      if (i.items) {
        return (
          <Menu.Item key={'group-' + n}>
            {
              i.header &&
              <Menu.Header>
                {i.header}
              </Menu.Header>
            }
            <Menu.Menu>
              {this.buildItems(i.items)}
            </Menu.Menu>
          </Menu.Item>
        )
      } else {
        return (
          <Menu.Item
            key={i.path || n}
            name={i.path}
            onClick={() => { this.onItemClick(i.path) }}
            active={this.isCurrent(i.path)}
            style={this.getItemStyle(i)}
            >
            {i.content}
          </Menu.Item>
        )
      }
    })
  }

  render() {
    return (
      <Menu vertical style={style.menu}>
        {this.getItems()}
      </Menu>
    )
  }
}

export default withRouter(connect()(SideBar))
