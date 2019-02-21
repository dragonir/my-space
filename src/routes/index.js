import React from 'react';
import { Switch, Route} from 'react-router-dom'; 
import { Home } from '../containers'
import { About } from '../containers'

import { Table, Tabs, Snackbar } from '../components/index';

export default (
  <Switch>
    <Route component={ Home } path="/" exact />
    <Route component={ About } path="/about" />
    <Route component={ Table } path='/table' />
    <Route component={ Tabs } path="/tabs" />
    <Route component={ Snackbar } path="/snackbar" />
  </Switch>
)