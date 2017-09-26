import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Dropdown, Icon, Menu } from 'semantic-ui-react'
import * as actions from '../../../store/action-creators'

import Logo from '../Logo'
import style from './style'

class TopBar extends Component {
  componentDidMount() {
    this.props.dispatch(actions.setUser('startup-member'))
  }

  changeUser(type) {
    this.props.dispatch(actions.setUser(type))
  }

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
                <Dropdown text={this.props.user.name} icon='user' labeled button className='icon' style={style.userDropdown}>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={item => {this.changeUser('startup-member')}}>Startup</Dropdown.Item>
                    <Dropdown.Item onClick={item => {this.changeUser('mentor')}}>Mentor</Dropdown.Item>
                    <Dropdown.Item onClick={item => {this.changeUser('accelerator-member')}}>Accelerator</Dropdown.Item>
                    <Dropdown.Divider />
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

export default connect(state => ({
  user: state.user
}))(TopBar)
