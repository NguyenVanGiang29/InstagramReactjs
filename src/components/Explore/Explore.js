import { GridList, GridListTile, makeStyles } from '@material-ui/core'
import React from 'react'
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 900,
      height: 600,
    },
  }));

const tileData = [
    {
        img: image1,
        title: 'image1'        
    },
    
    {
        img: image2,
        title: 'image2'       
    },
    
    {
        img: image3,    
        title: 'image3'        
    },
    
    {
        img: image4,   
        title: 'image4'         
    },
    
    {
        img: image5,    
        title: 'image5'        
    },
    {
        img: image1,
        title: 'image1'        
    },
    
    {
        img: image2,
        title: 'image2'       
    },
    
    {
        img: image3,    
        title: 'image3'        
    },
    
    {
        img: image4,   
        title: 'image4'         
    },
    
    {
        img: image5,    
        title: 'image5'        
    },
    {
        img: image1,
        title: 'image1'        
    },
    
    {
        img: image2,
        title: 'image2'       
    },
    
    {
        img: image3,    
        title: 'image3'        
    },
    
    {
        img: image4,   
        title: 'image4'         
    },
    
    {
        img: image5,    
        title: 'image5'        
    },
    {
        img: image1,
        title: 'image1'        
    },
    
    {
        img: image2,
        title: 'image2'       
    },
    
    {
        img: image3,    
        title: 'image3'        
    },
    
    {
        img: image4,   
        title: 'image4'         
    },
    
    {
        img: image5,    
        title: 'image5'        
    },
    {
        img: image5,    
        title: 'image5'        
    },
];

export const Explore = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>

    )
}
