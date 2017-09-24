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

  getHomeItems() {
    return [
      {
        header: '8200',
        items: [
          { path: '/', content: 'Home' },
          { path: '/agenda', content: 'Agenda' },
          { path: '/opportunities', content: 'Opportunities' },
          { path: '/startups', content: 'Start-Ups' },
          { path: '/mentors', content: 'Mentors' },
          { path: '/people', content: 'All People' }
        ]
      },
      {
        header: 'Reesio',
        items: [
          { path: '/startups/reesio', content: 'Reesio Profile' },
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
    ]
  }

  getStartupItems() {
    //TODO fix match params to update on route change
    const base = '/startups/' + this.props.match.params.id
    return [
      { path: '/', content: '← Back Home' },
      {
        header: 'Reesio',
        items: [
          { path: base, content: 'Profile' },
          { path: `${base}/activity`, content: 'Activity' },
          { path: `${base}/files`, content: 'Files' }
        ]
      }
    ]
  }

  getItems() {
    if (this.props.location.pathname.startsWith('/startups/')) {
      return this.buildItems(this.getStartupItems())
    }
    return this.buildItems(this.getHomeItems())
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
