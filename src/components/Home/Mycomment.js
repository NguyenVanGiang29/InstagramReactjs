import React from 'react';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import { makeStyles,     Button, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    textField: {
        width: '500px',
        marginLeft: '10px',
        paddingBottom: '-20px',
    },
    button: {
        marginTop: '-27px',
        marginLeft: '510px',
    },
    input: {
        position: 'absolute',
        width: '450px',
        marginTop: '5px',
        marginLeft: '20px',
        paddingBottom: '10px'
    }
}));

export const Mycomment = () => {
    const classes = useStyles();
    return (
        <div>
            <SentimentSatisfiedOutlinedIcon style={{ fontSize: '35px', marginLeft: '20px', marginTop: '3px' }}/>
            {/* <TextField variant="outlined" placeholder="Thêm bình luận..." className={classes.textField}/> */}
            <input className={classes.input} placeholder="Thêm bình luận..."></input>
            <Button className={classes.button} variant="contained">
                <Link  style={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>Đăng</Link>
            </Button>
        </div>

    )
}
