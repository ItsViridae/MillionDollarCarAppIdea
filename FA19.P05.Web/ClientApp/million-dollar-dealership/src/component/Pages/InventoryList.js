import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import '../../CSSfiles/InventoryList.css';
import Spinner from './Spinner.js'


//Images for the Inventory below
import HondaInsightImg from '../../CarImg/Honda/2019HondaInsight.jpg';
import HondaInsightInterior from '../../CarImg/Honda/2019HondaInsightInterior.png';
import FordEdgeImg from '../../CarImg/Ford/2019FordEdge.jpg';
import FordEdgeImg2 from '../../CarImg/Ford/2019FordEdge.png';

    //Car data is structured as follows:
 const data = [
    {
      id: 1,
      img: HondaInsightImg,
      model: 'Insight',
      make: 'Honda',
      year: 2019,
      featured: true,
      isLoading: true,
    },
    {
        id: 2,
        img: HondaInsightInterior,
        model: 'Insight',
        make: 'Honda',
        year: 2019,
        featured: true,
        isLoading: true,
    },
    {
      id: 3,
      img: FordEdgeImg,
      model: 'Edge',
      make: 'Ford',
      year: 2019,
      featured: true,
      isLoading: true,
  },
  {
    id: 4,
    img: FordEdgeImg2,
    model: 'Edge',
    make: 'Ford',
    year: 2019,
    featured: true,
    isLoading: true,
  },
 ];

export default function AdvancedGridList() {
  return (
    <div className="flex-container">
      <div className="root">
      <GridList cellHeight={325} className="gridList">
        <GridListTile key="Header" cols={2} className="grid-list-tile">
          <Card style={{ backgroundColor: "#00acc1", padding: 2, zIndex: 10 }}>
            <Typography className="CarDisplayDetails">
                Inventory
            </Typography>
          </Card>
        </GridListTile>
        {data.map((data, index) => (
          <GridListTile key={index}>
            <img src={data.img} alt={data.model} />
            {data.isLoading = false}
            <Spinner />
            <GridListTileBar
              title={data.model}
              subtitle={<span>{data.make}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${data.model}`} className="icon">
                  <InfoIcon className="icon"/>
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