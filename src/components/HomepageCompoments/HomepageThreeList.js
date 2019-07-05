import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import blogListData from './HomepageThreeListData';
import { Divider } from '@material-ui/core';

const styles = theme => ({
  root: {
    backgroundColor: 'transparent',
    margin: '0 1em',
    padding: '0 5%',
  },
});

function HomepageThreeList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        {blogListData.map(blog => (
          <div key={blog.id}>
             <ListItem>
              <Avatar>
                <ImageIcon />
              </Avatar>
              <ListItemText primary={blog.title} secondary={blog.descript} />
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