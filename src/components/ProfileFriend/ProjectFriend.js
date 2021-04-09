import { makeStyles, Grid, Avatar, Typography, Button } from '@material-ui/core'
import React from 'react'
import avatar from './avatar.jpg';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

const useStyles = makeStyles((theme) => ({
    Profile: {
        backgroundColor: '#DDDDDD',
        height: '1000px',
        marginLeft: '210px',
        marginTop: '30px',
    },
    Info: {
        backgroundColor: '#D3D3D3',
        height: '365px',
    },
    InfoFriend: {
        backgroundColor: '#FFB5C5',
        height: '180px',
    },
    avatar: {
        position: 'absolute',
        height: '150px',
        width: '150px',
        marginLeft: '40px',
        marginTop: '15px',
    },
    name: {
        position: 'absolute',
        fontSize: '27px',
        marginLeft: '260px',
        marginTop: '10px',        
    },
    sendMess: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        marginLeft: '435px',
        marginTop: '13.9px',
        fontSize: '10px'

    },
    Follow: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        marginLeft: '510px',
        marginTop: '13.9px',
        fontSize: '10px',
    },
    AddfriendIcon: {
        fontSize: '17px',
    },
    Suggest: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        marginLeft: '585px',
        marginTop: '13.9px',
    },
    ExpandIcon: {
        fontSize: '17px',
    },
    
}));

export const ProjectFriend = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid
             className={classes.Profile}
             xs ={8}
            >
                <Grid className={classes.Info}>
                    <Grid className={classes.InfoFriend}>
                        <Avatar  className={classes.avatar} alt src={avatar} />
                        <Typography className={classes.name}>
                            nt.nhatchang
                        </Typography>
                        <Button className={classes.sendMess}>
                            Nhắn tin
                        </Button>
                        <Button className={classes.Follow}>
                            <PersonAddOutlinedIcon  className={classes.AddfriendIcon}/>
                        </Button>
                        <Button className={classes.Suggest}>
                            <ExpandMoreRoundedIcon  className={classes.ExpandIcon}/>
                        </Button>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}
