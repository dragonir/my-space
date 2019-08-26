import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './features/Nav'
import Footer from './features/Footer'
import NetEaseMusic from './components/BlogComponents/NetEaseMusic'
import _config from './config'
import './App.scss';
import routes from './routes/index.js';
const Router = process.env.ROUTE_MODE === 'hash' ? BrowserRouter : HashRouter
export default connect(state => {
  return {
    ...state.page
  }
})(
  class extends React.Component {
    render() {
      const { netEaseMusicID } = _config
      const { isDark } = this.props
      return (
        <React.Fragment>
          {netEaseMusicID && <NetEaseMusic id={netEaseMusicID} />}
          <Router>
            <div className={isDark ? 'bp3-dark' : ''} id="content-root">
              <Nav />
              { routes }
              <Footer />
            </div>
          </Router>
        </React.Fragment>
      )
    }
  }
);
