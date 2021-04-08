import { Avatar, makeStyles, Typography, Link } from '@material-ui/core'
import React from 'react';
import avatar from './friendSuggest.jpg';

const useStyles = makeStyles((theme) => ({
    friendSuggested: {
        backgroundColor: '#DDDDDD',
        height: '48px',
    },
    avatar: {
        position: 'absolute',
        marginTop: '3.5px',
        marginLeft: '10px',
    },
    allview: {
        position: 'absolute',
        fontSize: '13px',  
        marginLeft: '65px'
    },
    follow: {
        position: 'absolute',
        fontSize: '12px',
        fontWeight: 'bold', 
        marginLeft: '225px',
        marginTop: '-10px'
    }

}));
export const FriendSuggested = () => {
    const classes = useStyles();
    return (
        <div className={classes.friendSuggested}>
            <Avatar alt className={classes.avatar} src={avatar} />
            <Typography style={{ fontSize: '14px', fontWeight: 'bold', marginLeft: '65px', paddingTop:'5px' }}>
                lin_nguye1211
            </Typography>
            <Typography className={classes.allview}>
                Gợi ý cho bạn
            </Typography>
            <Link className={classes.follow}>
                Theo dõi
            </Link>
        </div>
    )
}
