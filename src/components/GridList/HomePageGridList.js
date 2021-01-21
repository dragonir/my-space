import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import tileData from './HomePageGridListtileData';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    height: '80%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    // padding: '1em 10em',
    position: 'absolute',
    top: '10%',
    bottom: '0',
    right: '0',
    left: '0',
    margin: 'auto',
  },
  gridList: {
    width: '100%',
  },
  icon: {
    color: 'white',
  },
  card: {
    width: '40%',
    height: '42%',
    margin: '1em 0'
  },
  media: {
    height: 140,
  },
  info: {
    padding: 0,
  },
  btn: {
    width: '100%',
    color: '#2D2D2D',
    letterSpacing: '.25em',
  },
});

class HomePageGridList extends React.Component {
  state = {
    active: false,
  };
  handleMouseEnter = () => {
    this.setState({
      active: true
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {tileData.map(tile => (
          <Card className={classes.card} key={tile.id}>
            <CardActionArea className="gray" onMouseEnter={this.handleMouseEnter}>
              <CardMedia
                className={classes.media}
                image={tile.img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography component="p" className={classes.info}>
                  {tile.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{position: 'relative', textAlign: 'right', 'height': '32px'}}>
              <Button size="small" color="primary" href={this.props.learnMore} className={classes.btn}>VISIT</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }
}

HomePageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePageGridList);
