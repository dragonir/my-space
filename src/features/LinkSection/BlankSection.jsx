import React, { Component } from 'react'
import _config from '../../config'
import './blankSection.styl'

export default class extends Component {
  state = {
    userInfo: {}
  }
  render() {
    const { blankSections } = _config
    return (
      <footer className="blank-sec">
        {blankSections &&
          blankSections.map((el, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: el }} />
          ))}
      </footer>
    )
  }
}
