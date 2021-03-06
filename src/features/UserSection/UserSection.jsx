import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@blueprintjs/core'
import SectionItem from '../../components/BlogComponents/SectionItem'
import { getUser } from '../../utils/github'
import scrollAni from './scrollAni'
import _config from '../../config'
import './userSection.styl'

export default class extends Component {
  state = {
    userInfo: {}
  }
  render() {
    const { avatar_url, name, login } = this.props.userInfo
    const { description } = _config
    return (
      <SectionItem>
        {avatar_url && (
          <div className="user-sec-container" ref={scrollAni}>
            <Link to="/">
              {/* <img className="user-avator" alt="avator" src={avatar_url} /> */}
            </Link>
            <h2 className="user-name">{name || login}</h2>
            <p className="user-desc">{description}</p>
            {_config.userLinks.length !== 0 &&
              _config.userLinks.map((el, index) => (
                <a href={el.url} key={index} className="user-link">
                  <Button className="bp3-fill" icon={el.icon || 'link'} intent="Primary">
                    {el.title}
                  </Button>
                </a>
              ))}
          </div>
        )}
      </SectionItem>
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
