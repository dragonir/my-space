import React from 'react';
import { Switch, Route} from 'react-router-dom'; 
import { Home, About, Work } from '../containers/index'
import { AppBar, Avatars, Badges, ExpansionPanels, Table, Tabs, Snackbar, Dialogs, Buttons, Cards, Chips, Dividers, Lists, Progress, SelectionControls } from '../components/index';

export default (
  <Switch>
    <Route component={ Home } path="/" exact />
    <Route component={ About } path="/about" />
    <Route component= { Work } path="/work" />

    <Route component={ AppBar } path="/appbar" />
    <Route component={ Avatars } path="/avatars" />
    <Route component={ Badges } path="/badges" />
    <Route component={ ExpansionPanels } path="/expansionpabels" />

    <Route component={ Table } path='/table' />
    <Route component={ Tabs } path="/tabs" />
    <Route component={ Snackbar } path="/snackbar" />
    <Route component={ Dialogs } path="/dialog" />
    <Route component={ Buttons } path="/buttons" />
    <Route component={ Cards } path="/cards" />
    <Route component={ Chips } path="/chips" />
    <Route component={ Dividers } path="/dividers" />
    <Route component={ Lists } path="/lists" />
    <Route component={ Progress } path="/progress" />
    <Route component={ SelectionControls } path="/selectionControls" />
  </Switch>
)