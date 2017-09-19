import React, { Component } from 'react'
import _ from 'lodash'

import { Grid } from 'semantic-ui-react'
import style from './style'

class Calendar extends Component {
  getWeek(weekNum) {
    const days = []
    _.times(7, n => {
      days.push(this.getDay(n + 1 + (weekNum * 7)))
    })
    return (
      <Grid.Row columns={7} key={weekNum}>
        {days}
      </Grid.Row>
    )
  }

  getDay(monthDay) {
    return (
      <Grid.Column style={style.day} key={monthDay}>
        {monthDay}
      </Grid.Column>
    )
  }

  render() {
    const weeks = []
    _.times(5, n => {
      weeks.push(this.getWeek(n))
    })

    return (
      <Grid celled>
        {weeks}
      </Grid>
    )
  }
}

export default Calendar
