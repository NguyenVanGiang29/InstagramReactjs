import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';
import React from 'react';
import avatar from './avatar.jpg';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
    name : {
        backgroundColor: '#DDDDDD',
        height: '60px',
        
    },
    typography : {
        width: '600px',
        marginLeft: '55px',
        marginTop: '9px',
        fontWeight: 'bold',
    },
    avatar: {
        position: 'absolute',
        marginTop: '5px',
        marginLeft: '6px',
    },
    moreButton: {
        marginLeft: '400px',
    }

        
}));

export const Name = () => {

    const classes = useStyles();
    return (
        <div className={classes.name}>
            <div className={classes.avatar}>
                <Avatar className={classes.avatar}alt="" src={avatar} />

                <Typography className={classes.typography}>
                    <Link to="/profileFriend" style={{color: 'black'}}>
                        nt.xuandang
                    </Link>
                    
                    <Button className={classes.moreButton}>
                        <MoreHorizIcon />
                    </Button>
                    
                </Typography>
                
                
            </div>
        </div>
    )
}
