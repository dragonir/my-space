import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; 
import { Home } from '../containers'
import { About } from '../containers'

class RouterLayout extends Component {
  render(){
    return (
      <Switch>
        <Route path="/" exact render={() => (<Redirect to="/index" />)} />
        <Route path="/index" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    )
  }
}

export default RouterLayout;