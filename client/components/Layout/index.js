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
import Agenda from '../views/Agenda/'
import Opportunities from '../views/Opportunities/'
import Startups from '../views/Startups/'
import NotFound from '../views/NotFound/'
import style from './style'

class Layout extends Component {
  render() {
    const page = <Switch>
      <Route exact path="/" component={Feed} />
      <Route exact path="/agenda" component={Agenda} />
      <Route exact path="/opportunities" component={Opportunities} />
      <Route exact path="/startups" component={Startups} />
      <Route component={NotFound} />
    </Switch>

    let layout = <LayoutSideNav page={page} />
    switch (this.props.location.pathname) {}
    return layout
  }
}

export default withRouter(Layout)
