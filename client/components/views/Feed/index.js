import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import { Feed, Icon } from 'semantic-ui-react'
import style from './style'
import placeholderImg from '../../../assets/placeholder.png'
import user1img from '../../../assets/addyosmani.png'
import user2img from '../../../assets/gaearon.jpg'
import user3img from '../../../assets/notwaldorf.jpg'
import user4img from '../../../assets/torvalds.jpg'

class HomeFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: []
    }
  }

  componentDidMount() {
    this.props.dispatch(actions.setTitle('8200 Feed'))
    this.getFeed()
  }

  getFeed() {
    this.setState({
      ...this.state,
      feed: [
        {
          id: 1234,
          user: {
            name: 'Kayla Sawayn',
            title: 'CEO, Feeco',
            avatar: user3img
          },
          datetime: {
            timestamp: 1505821471,
            text: '2 hours ago'
          },
          text: `Letting your customers set your standards is a dangerous game, because the race to the bottom is pretty easy to win. Setting your own standards--and living up to them--is a better way to profit. Not to mention a better way to make your day worth all the effort you put into it.`,
          comments: 1
        }, {
          id: 1235,
          user: {
            name: 'Oran Harvey',
            title: 'Marketing, Smartly',
            avatar: user2img
          },
          datetime: {
            timestamp: 1505821471,
            text: '3 hours ago'
          },
          text: `We found this amazing freelance UX designer! She really helped us focus, asked the right questions and delivered quality stuff. Take a look`,
          images: [placeholderImg, placeholderImg],
          comments: 0
        }, {
          id: 1236,
          user: {
            name: 'Taryn Hackett',
            title: 'Mentor',
            avatar: user1img
          },
          datetime: {
            timestamp: 1505821471,
            text: '10 hours ago'
          },
          text: `Any recommendations for a good law firm or lawyer with government expertise?`,
          comments: 5
        }, {
          id: 1237,
          user: {
            name: 'Terry Corwin',
            avatar: user4img
          },
          datetime: {
            timestamp: 1505821471,
            text: '1 day ago'
          },
          text: `Quick question: What is your first impression of these logos?`,
          images: [placeholderImg, placeholderImg],
          comments: 12
        }
      ]
    })
  }

  repliesText(numberOfComments) {
    if (numberOfComments === 1) {
      return '1 reply'
    } else if (numberOfComments > 1) {
      return numberOfComments + ' replies'
    } else {
      return 'No replies yet'
    }
  }

  render() {
    return (
      <div style={style.container}>
        <Feed>
          {
            this.state.feed.map(p => 
              <Feed.Event key={p.id}>
                <Feed.Label image={p.user.avatar} />
                <Feed.Content>
                  <Feed.Summary>
                    <a>{p.user.name}</a>
                    {
                      p.user.title &&
                      ' ' + p.user.title
                    }
                    <Feed.Date>{p.datetime.text}</Feed.Date>
                  </Feed.Summary>
                  {
                    p.text &&
                    <Feed.Extra text>
                      {p.text}
                    </Feed.Extra>
                  }
                  {
                    p.images && p.images.length > 0 &&
                    <Feed.Extra images>
                      {
                        p.images.map((i, n) => <a key={n}><img src={i} /></a>)
                      }
                    </Feed.Extra>
                  }
                  <Feed.Meta>
                    <Icon name='comment' />
                    {this.repliesText(p.comments)}
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            )
          }
        </Feed>
      </div>
    )
  }
}

export default connect()(HomeFeed)
