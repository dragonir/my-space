import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const styles = {
  card: {
    maxWidth: 750,
    margin: 'auto'
  },
  media: {
    height: 350,
  },
  info: {
    padding: 0,
  },
  btn: {
    width: '100%',
    color: '#CCCCCC',
    padding: 0,
    letterSpacing: '.25em',
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card} style={{maxWidth: props.maxWidth}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
          style={{height: props.height}}
        />
        <CardContent>
          <Typography component="p" className={classes.info}>
            {props.info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{position: 'relative', textAlign: 'right'}}>
        <Button size="small" color="primary" href={props.learnMore} className={classes.btn}>
          Click to learn More
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);