import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from '@material-ui/core';

const styles = theme => ({
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 10,
    background: '#03C03C',
    color: '#FFFFFF',
    '&:hover': {
      background: '#03C03C',
      opacity: '0.8',
    },
  },
});

function LearnMore(props) {
  const { classes } = props;
  return (
    <div>
      <Link href={props.route}>
        <Tooltip title="LEARN MORE" aria-label="LEARN MORE">
            <Fab color="default" className={classes.absolute}>
              <KeyboardArrowRight />
            </Fab>
        </Tooltip>
      </Link>
    </div>
  );
}

LearnMore.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LearnMore);
