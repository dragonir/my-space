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
import "./HomePageGridList.scss";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: '1em 2.5em',
  },
  gridList: {
    width: '80%',
    height: 'calc(100vh - 100px)',
    transform: 'translateZ(0)',
  },
  titleBar: {
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  card: {
    width: '24%',
    margin: '1.25em auto'
  },
  media: {
    height: 150,
  },
  info: {
    padding: 0,
  },
  btn: {
    width: '100%',
    color: '#CCCCCC',
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
            <CardActions style={{position: 'relative', textAlign: 'right'}}>
              <Button size="small" color="primary" href={this.props.learnMore} className={classes.btn}>
                preview
              </Button>
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
