import React from 'react';
import { Switch, Route} from 'react-router-dom'; 
import { Home, About } from '../containers/index'
import { Table, Tabs, Snackbar, Dialogs, Buttons } from '../components/index';

export default (
  <Switch>
    <Route component={ Home } path="/" exact />
    <Route component={ About } path="/about" />
    <Route component={ Table } path='/table' />
    <Route component={ Tabs } path="/tabs" />
    <Route component={ Snackbar } path="/snackbar" />
    <Route component={ Dialogs } path="/dialog" />
    <Route component={ Buttons } path="/buttons" />
  </Switch>
)