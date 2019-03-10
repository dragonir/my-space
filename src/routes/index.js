import React from 'react';
import { Switch, Route} from 'react-router-dom'; 
import { Home, About } from '../containers/index'
import { Table, Tabs, Snackbar, Dialogs, Buttons, Cards, Chips, Dividers, Progress, SelectionControls } from '../components/index';

export default (
  <Switch>
    <Route component={ Home } path="/" exact />
    <Route component={ About } path="/about" />
    <Route component={ Table } path='/table' />
    <Route component={ Tabs } path="/tabs" />
    <Route component={ Snackbar } path="/snackbar" />
    <Route component={ Dialogs } path="/dialog" />
    <Route component={ Buttons } path="/buttons" />
    <Route component={ Cards } path="/cards" />
    <Route component={ Chips } path="/chips" />
    <Route component={ Dividers } path="/dividers" />
    <Route component={ Progress } path="/progress" />
    <Route component={ SelectionControls } path="/selectionControls" />
  </Switch>
)