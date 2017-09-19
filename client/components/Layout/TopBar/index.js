import React, { Component } from 'react'
import { Container, Dropdown, Icon, Menu } from 'semantic-ui-react'

import Logo from '../Logo'
import style from './style'

class TopBar extends Component {
  render() {
    return (
      <div style={style.container}>
        <Container>
          <Menu borderless style={style.menu}>
            <Menu.Item fitted>
              <Logo />
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item name='menu' style={style.menuItem}>
                <Dropdown text='Rick Sanchez' icon='user' labeled button className='icon' style={style.userDropdown}>
                  <Dropdown.Menu>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Notifications</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
      </div>
    )
  }
}

export default TopBar
