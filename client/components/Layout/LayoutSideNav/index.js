import React, { Component } from 'react'

import { Container } from 'semantic-ui-react'
import TopBar from '../TopBar/'
import SideBar from '../SideBar/'
import PageHeader from '../PageHeader/'
import Footer from '../Footer/'
import style from './style'

class LayoutSideNav extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Container style={style.contentContainer}>
          <SideBar />
          <div style={style.content}>
            <PageHeader />
            {this.props.page}
          </div>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default LayoutSideNav
