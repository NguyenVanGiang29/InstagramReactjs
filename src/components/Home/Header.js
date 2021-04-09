import { AppBar, CssBaseline, makeStyles, Typography, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import SvgIcon from '@material-ui/core/SvgIcon';
import React from 'react';
import TelegramIcon from '@material-ui/icons/Telegram';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Avatar from '@material-ui/core/Avatar';
import avatar from './avatar.jpg';

const useStyles = makeStyles((theme) => ({

  appbar: {
    height: '60px',
  },
  typo: {
    width: '100%',
    height: '50px',
    marginLeft: '210px',
    marginTop: '13px',
    fontFamily: 'Lucida Console',
  },
  input: {
    width: '250px',
    marginLeft: '200px',
    backgroundColor: '#DDDDDD',
    position: 'relative',
    borderRadius: '3px',
  },
  searchIcon: {
    position: 'absolute',
    marginTop: '8px',
    marginLeft: '172px',
  },
  homeIcon: {
    position: 'absolute',
    marginLeft: '150px',
  },
  telegramIcon: {
    position: 'absolute',
    marginLeft: '200px',
  },
  exploreIcon: {
    position: 'absolute',
    marginLeft: '250px',
  },
  favoriteIcon: {
    position: 'absolute',
    marginLeft: '300px',
  },
  avatar: {
      position: 'absolute',
      marginLeft: '1145px',
      marginTop: '10px',
  },
  

}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <CssBaseline />
            <AppBar className={classes.appbar} position="relative" color="default">
                <Typography className={classes.typo} variant="h5" color="black" noWrap>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      Instagram
                    </Link>      
                    <SearchIcon className={classes.searchIcon} />
                    <InputBase className={classes.input} placeholder="Tìm kiếm">
                    </InputBase>
                    <Link to="/">
                      <HomeIcon className={classes.homeIcon} style={{ fontSize: 38 }} />
                    </Link>
                    <Link to="/inbox">
                      <TelegramIcon className={classes.telegramIcon} style={{ fontSize: 38 }} />
                    </Link>
                    <Link to="/explore">
                      <ExploreOutlinedIcon className={classes.exploreIcon} style={{ fontSize: 37 }} />
                    </Link>
                    <Link>
                      <FavoriteBorderIcon className={classes.favoriteIcon} style={{ fontSize: 38 }} />
                    </Link>

                    
                </Typography>
                <Avatar className={classes.avatar} alt="Dang" src={avatar} />

            </AppBar>
        </div>
    )
}
