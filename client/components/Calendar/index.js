import React, { Component } from 'react'
import moment from 'moment'
import _ from 'lodash'

import { Grid } from 'semantic-ui-react'
import style from './style'

class Calendar extends Component {
  getWeekRow(days, key) {
    return (
      <Grid.Row columns={7} key={key}>
        {days}
      </Grid.Row>
    )
  }

  getDayCell(monthDay, key) {
    return (
      <Grid.Column style={style.day} key={monthDay || key}>
        {monthDay}
      </Grid.Column>
    )
  }

  getMonthWeeks() {
    let week = []
    const weeks = []
    const monthDate = moment(`${this.props.year}-${this.props.month}-01`, 'YYYY-MM-DD')
    // Add empty cells to first week
    _.times(monthDate.day(), n => {
       week.push(this.getDayCell(null, 'k1' + n))
    })
    _.times(monthDate.daysInMonth(), n => {
      if (monthDate.day() === 0 && n > 0) {
        weeks.push(this.getWeekRow(week, weeks.length))
        week = []
      }
       week.push(this.getDayCell(monthDate.date()))
       monthDate.add(1, 'day')
    })
    // Add empty cells to last week
    if (monthDate.day() > 0) {
      _.times(7 - monthDate.day(), n => {
         week.push(this.getDayCell(null, 'k2' + n))
      })
    }
    weeks.push(this.getWeekRow(week, weeks.length))
    return weeks
  }

  render() {
    const weeks = this.getMonthWeeks()
    return (
      <Grid celled>
        {weeks}
      </Grid>
    )
  }
}

export default Calendar
