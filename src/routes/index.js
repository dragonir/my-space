import React from 'react';
import { Switch, Route} from 'react-router-dom'; 
import { Home, About, Work } from '../containers/index'
import homeRoute from '../routes/home'
import articleRoute from '../routes/article'
import notFoundRoute from '../routes/notFound'
import labelRoute from '../routes/label'

export default (
  <Switch>
    <Route component={ Home } exact path="/" />
    <Route component={ homeRoute }  path="/post" />
    <Route component={ labelRoute } path="/label/:label/:page" />
    <Route component={ labelRoute } path="/label/:label" />
    <Route component={ homeRoute } path="/post/:page" />
    <Route component={ articleRoute } path="/article/:id" />
    <Route component={ About } path="/about" />
    <Route component={ Work } path="/work" />
    <Route component={ notFoundRoute }  />
  </Switch>
)