import { Grid, GridList, GridListTile, makeStyles, Typography, Avatar } from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { Link } from 'react-router-dom';
import avatar from './avatar.jpg';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SentimentVerySatisfiedRoundedIcon from '@material-ui/icons/SentimentVerySatisfiedRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';

const useStyles = makeStyles((theme) => ({
    frame: {
        marginTop: '25px',
        height: '555px',
    },
    nameGrid: {
        marginLeft: '210px',
        backgroundColor: '#DDDDDD',
    },
    messageGrid: {
        backgroundColor: '#FAF0E6',
    },
    name: {
        backgroundColor: '#D3D3D3',
        height: '60px',
    },
    typography: {
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'absolute',
        width: '326px',
        marginTop: '18px'
    },
    AddCircleIcon: {
        paddingButton: '20px',
        fontSize: '28px',
        position: 'absolute',
        marginLeft: '60px',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#B5B5B5',
    },
    gridList: {
        width: 500,
        height: 500,
    },
    elementFriend: {
        backgroundColor: '#FFFFFF',
    },
    avatar: {
        marginTop: '7px',
        marginLeft: '15px',
        width: '56px',
        height: '56px',
    },
    nameFriend: {
        position: 'absolute',
        marginTop: '-45px',
        marginLeft: '85px',
        fontSize: '13.9px'
    },
    status: {
        position: 'absolute',
        marginTop: '-28px',
        marginLeft: '85px',
        fontSize: '13.5px',
        color: '#9C9C9C',
    },
    message: {
        backgroundColor: '#E8E8E8',
        height: '60px',
    },
    avatarmess: {
        position: 'absolute',
        height: '27px',
        width: '27px',
        marginTop: '16px',
        marginLeft: '38px',
    },
    nameMess: {
        fontSize: '13.9px',
        fontWeight: 'bold',
        marginTop: '10px',
        position: 'absolute',
        marginLeft: '80px',
    },
    statusMess: {
        fontSize: '11px',
        marginTop: '30px',
        position: 'absolute',
        marginLeft: '80px',
    },
    infoIcon: {
        marginLeft: '500px',
        marginTop: '15px',
        width: '30px',
        height: '30px',
    },
    Mess: {
        backgroundColor: '#B5B5B5',
        height: '431px',
    },
    send: {
        backgroundColor: '#D3D3D3',
        height: '67px',
    },
    framesend: {
        marginTop: '20px',
        width: '450px',
        marginLeft: '50px',
        paddingBottom: '10px',
        borderRadius: '30px',
        border: '2px',
        paddingLeft: '50px',
        paddingTop: '10px',
    },
    SentimentIcon: {
        position: 'absolute',
        height: '30px',
        width: '30px',
        marginTop: '23px',
        marginLeft: '65px',
    },
    FavoriteIcon: {
        position: 'absolute',
        height: '30px',
        width: '30px',
        marginTop: '23px',
        marginLeft: '-40px',
    },
    ImageIcon: {
        position: 'absolute',
        height: '30px',
        width: '30px',
        marginTop: '23px',
        marginLeft: '-75px',
    }
}));

export const Inbox = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.frame} container>
                <Grid className={classes.nameGrid} item xs={3}>
                    <div className={classes.name}>
                        <Typography className={classes.typography} >
                            <Link
                                style={{ textDecoration: 'none' }}
                            >
                                nt.xuandang
                                <ExpandMoreIcon
                                    style={{
                                        fontSize: '24px',
                                        position: 'absolute'
                                    }}
                                />
                            </Link>
                            <Link>
                                <AddCircleOutlineRoundedIcon
                                    className={classes.AddCircleIcon}
                                />
                            </Link>
                        </Typography>
                    </div>
                    <div className={classes.root}>
                        <GridList cellHeight={70} className={classes.gridList} cols={3}>
                            <GridListTile className={classes.elementFriend} cols={3}>
                                <Avatar className={classes.avatar} alt src={avatar} />
                                <Typography className={classes.nameFriend}>
                                    nt.nhatchang
                                    </Typography>
                                <Typography className={classes.status}>
                                    Đang hoạt động
                                    </Typography>
                            </GridListTile>

                            <GridListTile className={classes.elementFriend} cols={3}>
                                <Avatar className={classes.avatar} alt src={avatar} />
                                <Typography className={classes.nameFriend}>
                                    nt.nhatchang
                                </Typography>
                                <Typography className={classes.status}>
                                    Đang hoạt động
                                </Typography>
                            </GridListTile>
                            <GridListTile className={classes.elementFriend} cols={3}>
                                <Avatar className={classes.avatar} alt src={avatar} />
                                <Typography className={classes.nameFriend}>
                                    nt.nhatchang
                                </Typography>
                                <Typography className={classes.status}>
                                    Đang hoạt động
                                </Typography>
                            </GridListTile>
                            <GridListTile className={classes.elementFriend} cols={3}>
                                <Avatar className={classes.avatar} alt src={avatar} />
                                <Typography className={classes.nameFriend}>
                                    nt.nhatchang
                                </Typography>
                                <Typography className={classes.status}>
                                    Đang hoạt động
                                </Typography>
                            </GridListTile>
                            <GridListTile className={classes.elementFriend} cols={3}>
                                <Avatar className={classes.avatar} alt src={avatar} />
                                <Typography className={classes.nameFriend}>
                                    nt.nhatchang
                                </Typography>
                                <Typography className={classes.status}>
                                    Đang hoạt động
                                </Typography>
                            </GridListTile>
                            <GridListTile className={classes.elementFriend} cols={3}>
                                <Avatar className={classes.avatar} alt src={avatar} />
                                <Typography className={classes.nameFriend}>
                                    nt.nhatchang
                                </Typography>
                                <Typography className={classes.status}>
                                    Đang hoạt động
                                </Typography>
                            </GridListTile>
                            <GridListTile className={classes.elementFriend} cols={3}>
                                <Avatar className={classes.avatar} alt src={avatar} />
                                <Typography className={classes.nameFriend}>
                                    nt.nhatchang
                                </Typography>
                                <Typography className={classes.status}>
                                    Đang hoạt động
                                </Typography>
                            </GridListTile>
                            <GridListTile className={classes.elementFriend} cols={3}>
                                <Avatar className={classes.avatar} alt src={avatar} />
                                <Typography className={classes.nameFriend}>
                                    nt.nhatchang
                                </Typography>
                                <Typography className={classes.status}>
                                    Đang hoạt động
                                </Typography>
                            </GridListTile>
                            <GridListTile className={classes.elementFriend} cols={3}>
                                <Avatar className={classes.avatar} alt src={avatar} />
                                <Typography className={classes.nameFriend}>
                                    nt.nhatchang
                                </Typography>
                                <Typography className={classes.status}>
                                    Đang hoạt động
                                </Typography>
                            </GridListTile>
                        </GridList>
                    </div>
                </Grid>
                <Grid className={classes.messageGrid} item xs={5}>
                    <div className={classes.message}>
                        <Avatar alt src={avatar} className={classes.avatarmess} />
                        <Typography className={classes.nameMess}>
                            nt.nhatchang
                        </Typography>
                        <Typography className={classes.statusMess}>
                            Đang hoạt động
                        </Typography>
                        <Link>
                            <InfoOutlinedIcon className={classes.infoIcon}/>
                        </Link>
                        
                    </div>
                    <div className={classes.Mess}>
                            
                    </div>
                    <div className={classes.send}>
                        <SentimentVerySatisfiedRoundedIcon className={classes.SentimentIcon}/>
                        <input 
                            className={classes.framesend}
                            placeholder="Nhắn tin..."
                        />
                        <FavoriteBorderRoundedIcon className={classes.FavoriteIcon}/>
                        <ImageOutlinedIcon className={classes.ImageIcon} />
                        
                        
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}
