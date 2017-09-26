import React, { Component } from 'react'

import { Icon, Image, Label, List } from 'semantic-ui-react'
import style from './style'

class Activities extends Component {
  render() {
    return (
      <div style={style.container}>
        {
          this.props.days.map(day => {
            return <div style={style.day} key={day.date}>
              <div style={style.dayTitle}>
                <Icon circular name='calendar' style={style.dayTitleIcon} /> {day.date}
              </div>
              <List divided relaxed='very' verticalAlign='middle'>
              {
                day.activities.map(activity => {
                  return <List.Item key={activity.id}>
                    <Image avatar src={activity.avatar} />
                    <List.Content>
                      {activity.description}
                    </List.Content>
                  </List.Item>
                })
              }
              </List>
            </div>
          })
        }
      </div>
    )
  }
}

export default Activities
