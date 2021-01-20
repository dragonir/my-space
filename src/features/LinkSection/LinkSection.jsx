import React, { Component } from 'react'
import { Icon } from '@blueprintjs/core'
import { getUser } from '../../utils/github'
import SectionItem from '../../components/BlogComponents/SectionItem'
import BlankSection from './BlankSection.jsx'
import LabelSection from './LabelSection.jsx'
import AppSection from './AppSection.jsx'
import _config from '../../config'
import './linkSection.styl'

export default class extends Component {
  state = {
    userInfo: {}
  }
  render() {
    const { linkSections } = _config
    return (
      <React.Fragment>
        <LabelSection />
        <AppSection />
        {linkSections.map((el, index) => (
          <SectionItem key={index}>
            <div className="link-sec">
              <h3>{el.title}</h3>
              {el.linkList.map((el, index) => {
                return (
                  <div className="link-sec-item" key={index}>
                    <Icon icon="link" />
                    <a target="_blank" rel="noopener noreferrer" href={el.href}>
                      {el.name}
                    </a>
                  </div>
                )
              })}
            </div>
          </SectionItem>
        ))}
        <BlankSection />
      </React.Fragment>
    )
  }
  async UNSAFE_componentWillMount() {
    let userInfo = (await getUser(_config.userId)).data
    this.setState({
      userInfo
    })
    this.props.updateUserInfo(userInfo)
  }
}
