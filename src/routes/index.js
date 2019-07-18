import React from 'react';
import { Switch, Route} from 'react-router-dom'; 
import { Home, About, Work } from '../containers/index'
import { AppBar, Avatars, Badges, ExpansionPanels, Table, Tabs, Snackbar, Dialogs, Buttons, Cards, Chips, Dividers, Lists, Progress, SelectionControls, Autocomplete, GridList } from '../components/index';
import BottomNavigation from '../components/BottomNavigation';
import Material from '../containers/Material';
import Blog from '../containers/Blog';
import BlogDetail from '../containers/Blog/BlogDetail';
import homeRoute from '../routes/home'
import articleRoute from '../routes/article'
import notFoundRoute from '../routes/notFound'
import labelRoute from '../routes/label'

export default (
  <Switch>
    <Route exact path="/" component={homeRoute} />
    <Route path="/label/:label/:page" component={labelRoute} />
    <Route path="/label/:label" component={labelRoute} />
    <Route path="/post/:page" component={homeRoute} />
    <Route path="/article/:id" component={articleRoute} />
    <Route component={notFoundRoute}  />
    <Route component={ Home } path="/home"  />
    <Route component={ About } path="/about" />
    <Route component= { Work } path="/work" />
    <Route component={ Material } path="/material" />
    <Route component={ Blog } path="/blog" />
    <Route component={ BlogDetail } path="/blogdetail/:id" />
    <Route component={ AppBar } path="/appbar" />
    <Route component={ Autocomplete } path="/autocomplete" />
    <Route component={ Avatars } path="/avatars" />
    <Route component={ Badges } path="/badges" />
    <Route component={ BottomNavigation } path="/bottomnavigation" />
    <Route component={ ExpansionPanels } path="/expansionpabels" />
    <Route component={GridList} path="/gridlist" />
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