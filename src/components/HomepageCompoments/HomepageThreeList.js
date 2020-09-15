import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import { Divider } from '@material-ui/core';

const styles = theme => ({
  root: {
    backgroundColor: 'transparent',
    margin: '0 1em',
    padding: '0 5%',
  },
  post_link: {
    textDecoration: 'none',
    fontStyle: 'normal',
    '&:hover': {
      fontStyle: 'normal',
      textDecoration: 'none',
    }
  },
  avatar: {
    marginRight: '2rem',
    boxShadow: '1px 1px 10px rgba(0, 0, 0, .25)'
  }
});
function HomepageThreeList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        {props.posts.map(post => (
          <div key={post.id}>
             <ListItem>
              <Avatar className={classes.avatar}>
                <ImageIcon />
              </Avatar>
              <a href={post.link} className={classes.post_link}>
                <ListItemText primary={post.title} secondary={post.descript} />
              </a>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}

HomepageThreeList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomepageThreeList);
