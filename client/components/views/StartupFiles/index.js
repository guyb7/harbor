import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import FileItem from '../../FileItem/'
import style from './style'

class StartupFiles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 'reesio',
      name: 'Reesio',
      files: [
        {
          id: 'ab12',
          type: 'pdf',
          name: 'Business Plan'
        }, {
          id: 'ab13',
          type: 'image',
          name: 'Reesio Logo'
        }, {
          id: 'ab14',
          type: 'presentation',
          name: 'Pitch Deck'
        }, {
          id: 'ab15',
          type: 'pdf',
          name: 'Marketing material',
          description: 'elevator pitch 5 minutes'
        }, {
          id: 'ab16',
          type: 'pdf',
          name: 'Marketing material',
          description: 'Facebook ads campaign 2'
        }
      ]
    }
  }

  componentDidMount() {
    this.props.dispatch(actions.setTitle(this.state.name + ' Files'))
    this.props.dispatch(actions.setRouteInfo(this.props))
    this.loadStartupFiles()
  }

  loadStartupFiles() {
  }

  render() {
    return (
      <div style={style.container}>
        {
          this.state.files.map(f => <FileItem data={f} key={f.id} />)
        }
      </div>
    )
  }
}

export default connect()(StartupFiles)
