import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import avatar1  from '../../assets/images/components/bart.jpg';

const styles = {
  avatar: {
    margin: 10,
    border: '1px solid #CCCCCC',
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    border: '1px solid #CCCCCC',
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src={avatar1} className={classes.avatar} />
      <Avatar alt="Remy Sharp" src={avatar1} className={classes.bigAvatar} />
    </Grid>
  )
}

ImageAvatars.propsTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);