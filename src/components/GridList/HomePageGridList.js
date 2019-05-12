import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
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
  }
});

function HomePageGridList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    {tileData.map(tile => (
      <Card className={classes.card}>
        <CardActionArea>
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
          <Button size="small" color="primary" href={props.learnMore} className={classes.btn}>
            preview
          </Button>
        </CardActions>
      </Card>
    ))}
      {/* <GridList cellHeight={300} spaceing={1} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList> */}
    </div>
  );
}

HomePageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePageGridList);

