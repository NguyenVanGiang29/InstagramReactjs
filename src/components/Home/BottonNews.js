import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { makeStyles } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';

const useStyles = makeStyles((theme) => ({
    favoriteIcon: {
        fontSize: '30px',
        marginTop: '8px',
        marginLeft: '20px',
    },
    commentIcon: {
        fontSize: '30px',
        marginTop: '8px',
        marginLeft: '12px',
    },
    telegramIcon: {
        fontSize: '32px',
        marginTop: '8px',
        marginLeft: '10px',
    },
    saveIcon: {
        fontSize: '32px',
        marginTop: '8px',
        marginLeft: '460px',
    },
    
}));

export const BottonNews = () => {
    const classes = useStyles();
    return (
        <div>
            <FavoriteIcon className={classes.favoriteIcon} />
            <ChatBubbleOutlineIcon className={classes.commentIcon}/>
            <TelegramIcon className={classes.telegramIcon} />
            <TurnedInNotIcon className={classes.saveIcon} />
        </div>
    )
}
