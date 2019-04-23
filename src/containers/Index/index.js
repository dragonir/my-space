import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import routes from '../../routes/index';

const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex',
    textAlign: 'center'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'linear-gradient(to right, #11998e, #38ef7d)',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  toggleZone: {
    width: 96,
    height: 48,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    backgroundColor: '#F2F2F2',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: ' white'
  },
  navLink: {
    color: '#FFFFFF',
    marginLeft: theme.spacing.unit * 3,
    textDecoration: 'none',
  },
  navBtn: {
    height: "100%",
    padding: '20px 10px'
  }
});


class Index extends React.Component {
  state = {
    open: false,
    showSideBar: 'block',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  componentDidMount = () => {
    this.renderSideBar()
  };

  componentDidUpdate = () => {
    this.renderSideBar();
  };

  renderSideBar() {
    var url = window.location.href;
    var hash = url.substring(window.location.href.indexOf("#") + 2, url.length);
    if (hash === "about" || hash === "work" || hash === "") return false;
    return true;
  };

  renderNavBar() {
    if (window.location.hash === "#/") return false;
    return true;
  };

  render() {
    const { classes, theme } = this.props;
    var showSide = this.renderSideBar();
    var showNav = this.renderNavBar();
    const drawer = (
      <div>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, classes.hideDrawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <Link to='/appbar'>App Bar</Link>
          </List>
          <List>
            <Link to='/autocomplete'>Autocomplete</Link>
          </List>
          <List>
            <Link to='/avatars'>Avatars</Link>
          </List>
          <List>
            <Link to='/badges'>Badges</Link>
          </List>
          <List>
            <Link to='/bottomnavigation'>Bottom Navigation</Link>
          </List>
          <List>
            <Link to='/expansionpabels'>Expansion Pabels</Link>
          </List>
          <List>
            <Link to='/table'>Tables</Link>
          </List>
          <List>
            <Link to='/tabs'>Tabs</Link>
          </List>
          <List>
            <Link to='/snackbar'>Snackbar</Link>
          </List>
          <List>
            <Link to='/dialog'>Dialogs</Link>
          </List>
          <List>
            <Link to='/buttons'>Buttons</Link>
          </List>
          <List>
            <Link to='/cards'>Cards</Link>
          </List>
          <List>
            <Link to='/chips'>Chips</Link>
          </List>
          <List>
            <Link to='/dividers'>Dividers</Link>
          </List>
          <List>
            <Link to='/lists'>Lists</Link>
          </List>
          <List>
            <Link to='/progress'>Progress</Link>
          </List>
          <List>
            <Link to='/selectionControls'>Selection Controls</Link>
          </List>
        </Drawer>
      </div>
    );
    const drawerIcon = (
      <div>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={this.handleDrawerOpen}
          className={classNames(classes.menuButton, {
            [classes.hide]: this.state.open,
          })}
        >
          <MenuIcon />
        </IconButton>
      </div>
    );
    const nav = (
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: this.state.open,
        })}
      >
        <Toolbar disableGutters={!this.state.open}>
          <div className={classes.toggleZone}>
            {showSide ? drawerIcon : ''}
          </div>
          <Typography variant="h6" color="inherit" noWrap>
            MY SPACE
        </Typography>
          <Link to="/" className={classes.navLink} ><Button color="inherit" className={classes.navBtn} onClick={this.handleDrawerClose}>HOME</Button></Link>
          <Link to="/material" className={classes.navLink} ><Button color="inherit" className={classes.navBtn} onClick={this.handleDrawerClose}>Material</Button></Link>
          <Link to="/about" className={classes.navLink} ><Button color="inherit" className={classes.navBtn} onClick={this.handleDrawerClose}>ABOUT</Button></Link>
          <Link to="/work" className={classes.navLink} ><Button color="inherit" className={classes.navBtn} onClick={this.handleDrawerClose}>WORK</Button></Link>
        </Toolbar>
      </AppBar>
    );
    return (
      <div className={classes.root}>
        <CssBaseline />
        {showNav ? nav : ''}
        {showSide ? drawer : ''}
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {routes}
        </main>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Index);
