import React from 'react';
import { Switch, Route} from 'react-router-dom'; 
import { Home } from '../containers'
import { About } from '../containers'

export default (
  <Switch>
    <Route component={ Home } path="/" exact />
    <Route component={ About } path="/about" />
  </Switch>
)