import React, { Component } from 'react'

import { Card, Image } from 'semantic-ui-react'
import docIcon from '../../assets/doc-icon.png'
import presentationIcon from '../../assets/doc-presentation.png'
import pdfIcon from '../../assets/doc-pdf.png'
import style from './style'

class FileItem extends Component {
  getIcon() {
    switch(this.props.data.type) {
      case 'pdf':
        return pdfIcon
      case 'presentation':
        return presentationIcon
      default:
        return docIcon
    }
  }

  downloadFile() {
  }

  render() {
    const file = this.props.data
    return (
      <Card style={style.container} onClick={() => { this.downloadFile() }}>
        <Card.Content>
          <Image floated='right' size='mini' src={this.getIcon()} />
          <Card.Header>
            {file.name}
          </Card.Header>
          <Card.Meta>
            {file.type}
          </Card.Meta>
          <Card.Description>
            {file.description}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default FileItem
