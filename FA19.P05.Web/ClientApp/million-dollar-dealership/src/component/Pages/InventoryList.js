import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

//Images for the Inventory below
import HondaInsightImg from '../../CarImg/Honda/2019HondaInsight.jpg';
import HondaInsightInterior from '../../CarImg/Honda/2019HondaInsightInterior.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex:1,
    //flexWrap: 'wrap',
    //justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

    //Car data is structured as follows:
 const data = [
    {
      id: 1,
      img: HondaInsightImg,
      model: 'Insight',
      make: 'Honda',
      year: 2019,
      featured: true,
    },
    {
        id: 2,
        img: HondaInsightInterior,
        model: 'Inside view',
        make: 'Honda2',
        year: 2019,
        featured: true,
    },
    {
        id: 3,
        img: HondaInsightImg,
        model: 'Insight3',
        make: 'Honda3',
        year: 2019,
        featured: true,
    }
 ];

 
export default function AdvancedGridList() {
  const classes = useStyles();
    
  return (
    <div className={classes.root}>
      <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Header" cols={2} style={{ height: 'auto' }}>
          <Card style={{ backgroundColor: "#00acc1", padding: 2, zIndex: 10 }}>
            <Typography variant="h3" gutterBottom>
                Honda
            </Typography>
          </Card>
        </GridListTile>
        {data.map((data, index) => (
          <GridListTile key={index}>
            <img src={data.img} alt={data.model} />
            <GridListTileBar
              title={data.model}
              subtitle={<span>{data.make}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${data.model}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
  );
}