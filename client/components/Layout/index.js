import React, { Component } from 'react'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import { Container } from 'semantic-ui-react'
import LayoutSideNav from './LayoutSideNav/'
import LayoutNoNav from './LayoutNoNav/'
import Feed from '../views/Feed/'
import Page1 from '../views/Page1/'
import Page2 from '../views/Page2/'
import NotFound from '../views/NotFound/'
import style from './style'

class Layout extends Component {
  render() {
    const page = <Switch>
      <Route exact path="/" component={Feed} />
      <Route exact path="/agenda" component={Page1} />
      <Route exact path="/opportunities" component={Page2} />
      <Route component={NotFound} />
    </Switch>

    let layout = <LayoutSideNav page={page} />
    switch (this.props.location.pathname) {}
    return layout
  }
}

export default withRouter(Layout)