import React from 'react'

import SectionItem from '../components/BlogComponents/SectionItem'
import MainLayout from '../components/BlogComponents/MainLayout'
import Gitalk from '../components/BlogComponents/Gitalk'
import Article from '../features/Article'
import UserSection from '../features/UserSection'
import LinkSection from '../features/LinkSection'
import Loading from '../features/Loading'

export default class extends React.Component {
  render() {
    const issueId = this.props.match.params.id
    return (
      <React.Fragment>
        <Loading />
        <MainLayout>
          <SectionItem>
            <Article id={issueId} />
            <Gitalk id={issueId} />
          </SectionItem>
          <div>
            <UserSection />
            <LinkSection />
          </div>
        </MainLayout>
      </React.Fragment>
    )
  }
}
