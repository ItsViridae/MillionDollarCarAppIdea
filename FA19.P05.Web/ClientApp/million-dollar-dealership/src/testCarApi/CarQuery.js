import React, { useState } from 'react'
import axios from 'axios'
import API_ENDPOINTS from '../oldcomponents/endpoints/endpoints';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import camryOutside from '../CarImg/Toyota/2019ToyotaCamryWhite.png'
import camrySide from '../CarImg/Toyota/2019CamrySideView.jpg'
import modelS2019 from '../CarImg/Tesla/2019ModelSRed.jpg'
import modelS2019Inside from '../CarImg/Tesla/2019ModelSInterior.jpg'
import modelS2018 from '../CarImg/Tesla/2018ModelSOutside.jpg'
import modelS2018Inside from '../CarImg/Tesla/2018ModelS.jpg'

const CarApi = () => {
    const [GetCarData, setGetCarData] = useState([
        { make: '', model: '', year: '', img:'', img2:'' , price: ''}
    ]);
    const classes = useStyles();

    const Tcamry = setGetCarData([{make: 'Toyota', model: 'Camry', year: '2019', img:camryOutside, img2:camrySide, price: '24,095' }]);

    const TeslaModelS2019 = useState([{make: 'Tesla', model: 'Model S', year: '2019', img:modelS2019, img2:modelS2019Inside, price: '75,000' }]);

    const TeslaModelS2018 = useState([{make: 'Tesla', model: 'Model S', year: '2018', img:modelS2018, img2:modelS2018Inside, price: '75,000' }]);

    return (
        <div>
            <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Inventory</ListSubheader>
        </GridListTile>
        {GetCarData.map(GetCarData => (
          <GridListTile key={GetCarData.img}>
            <img src={GetCarData.img} alt={GetCarData.model} />
            <GridListTileBar
              title={GetCarData.make}
              subtitle={<span>Year: {GetCarData.year}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${GetCarData.model}`} className={classes.icon}>
                  
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
        </div>

    );
}
export default CarApi;

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));