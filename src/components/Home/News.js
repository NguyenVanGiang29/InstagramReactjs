import { Avatar, Button, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { BottonNews } from './BottonNews';
import { ImageNew } from './ImageNew';
import { Mycomment } from './Mycomment';
import { Name } from './Name';
import avatar from './avatar.jpg';
import { FriendSuggested } from './FriendSuggested';
import { Footer } from './Footer';

const useStyles = makeStyles((theme) => ({
    grid: {
        backgroundColor: '#DDDDDD',
        marginTop: '40px',
        marginLeft: '210px',
        height: '120px',
        borderColor: 'green'
    },
    carousel: {
        position: 'absolute',
        paddingLeft: '210px',
        backgroundColor: '#FFFAF0',
        marginTop: '20px',
        width: '50%',
        height: '80px',
    },
    girdNews: {
        backgroundColor: '#736F6E',
        marginLeft: '210px',
        height: '933px',
        marginTop: '24px',
    },
    imageNews: {
        backgroundColor: '#DDDDDD',
        height: '615px',
    },
    likecmt: {
        backgroundColor: '#DDDDDD',
        height: 'auto',
    },
    like: {
        height: '40px',
    },
    comment: {
        height: '160px',
    },
    countlike: {
        borderRadius: '10px',
        marginLeft: '16px',
    },
    cmt: {
        marginLeft: '20px',
    },
    mycomment: {
        height: '41px',
    },
    tabRight: {
        backgroundColor: '#FFFFFF',
        marginTop: '40px',
        marginLeft: '891px',
        width: '293px',
        height: '587px',
        position: 'fixed',
    },
    infoTab: {
        backgroundColor: '#FFFFFF',
        height: '56px',
        marginTop: '15px',
    },
    avatarInfo: {
        position: 'absolute',
        marginLeft: '10px',
        width: '55px',
        height: '55px',
    },
    changeAc: {
        position: 'absolute',
        marginTop: '-35px',
        paddingLeft: '150px',
    },
    suggestfriendTab: {
        backgroundColor: '#FFFFFF',
        marginTop: '28px',
        height: '325px',
    },
    allview: {
        position: 'absolute',
        fontSize: '14px', 
        fontFamily: 'Cursive', 
        fontWeight: 'bold',
        marginTop: '-20px',
        marginLeft: '200px',
    },
    link:{
        color: 'black',
        fontWeight: 'bold',
    },
}));

export const News = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Grid item className={classes.grid} xs={6}>
                    <div className={classes.carousel}>
                    </div>
                </Grid>
                <Grid className={classes.tabRight}>
                    <div className={classes.infoTab}>
                        <Avatar className={classes.avatarInfo} alt src={avatar} />
                        <Typography style = {{marginLeft: '80px', paddingTop: '3.9px', fontWeight:'bold'}}>
                            nt.xuandang
                        </Typography>
                        <Typography style = {{marginLeft: '80px'}}>
                            Nguyễn Văn Giang
                        </Typography>
                        <Link className={classes.changeAc} style = {{marginLeft: '80px', paddingTop: '3.9px', fontWeight:'bold', fontSize: '12px',
                            textDecoration: 'none'}}
                        >
                            Chuyển
                        </Link>
                    </div>
                    <div className={classes.suggestfriendTab}>
                        <Typography style = {{fontSize: '14px', fontFamily: 'Cursive', fontWeight:'bold', marginLeft: '10px'}}>
                            Gợi ý cho bạn
                        </Typography>
                        <Typography  className={classes.allview}    >
                            Xem tất cả
                        </Typography>
                        <FriendSuggested/>
                        <FriendSuggested/>
                        <FriendSuggested/>
                        <FriendSuggested/>
                        <FriendSuggested/>
                        <FriendSuggested/>
                    </div>
                    <Footer/>
                </Grid>
                <Grid item className={classes.girdNews} xs={6}>
                    <Name />
                    <div className={classes.imageNews}>
                        <ImageNew />
                    </div>
                    <div className={classes.likecmt}>
                        <div className={classes.like}>
                            <BottonNews />
                        </div>
                        <div className={classes.comment}>
                            <Button className={classes.countlike}>
                                <Typography variant="h15">
                                    6,832 lượt thích
                            </Typography>
                            </Button>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                                Hi friends! It's Monday, and we're happy
                        </span>
                            <br />
                            <Link>
                                <span className={classes.cmt}>
                                    Xem tất cả các bình luận
                                </span>
                            </Link>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                                I’ll be needing your help to plant some soon
                        </span>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                            so exciting!
                        </span>
                            <br />
                            <time className={classes.cmt}>
                                <Link>1 ngày trước</Link>
                            </time>

                        </div>
                        <hr />
                        <div className={classes.mycomment}>
                            <Mycomment />
                        </div>
                        <hr />
                    </div>
                </Grid>
                <Grid item className={classes.girdNews} xs={6}>
                    <Name />
                    <div className={classes.imageNews}>
                        <ImageNew />
                    </div>
                    <div className={classes.likecmt}>
                        <div className={classes.like}>
                            <BottonNews />
                        </div>
                        <div className={classes.comment}>
                            <Button className={classes.countlike}>
                                <Typography variant="h15">
                                    6,832 lượt thích
                            </Typography>
                            </Button>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                                Hi friends! It's Monday, and we're happy
                        </span>
                            <br />
                            <Link>
                                <span className={classes.cmt}>
                                    Xem tất cả các bình luận
                            </span>
                            </Link>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                                I’ll be needing your help to plant some soon
                        </span>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                            so exciting!
                        </span>
                            <br />
                            <time className={classes.cmt}>
                                <Link>1 ngày trước</Link>
                            </time>

                        </div>
                        <hr />
                        <div className={classes.mycomment}>
                            <Mycomment />
                        </div>
                        <hr />
                    </div>
                </Grid>
                <Grid item className={classes.girdNews} xs={6}>
                    <Name />
                    <div className={classes.imageNews}>
                        <ImageNew />
                    </div>
                    <div className={classes.likecmt}>
                        <div className={classes.like}>
                            <BottonNews />
                        </div>
                        <div className={classes.comment}>
                            <Button className={classes.countlike}>
                                <Typography variant="h15">
                                    6,832 lượt thích
                            </Typography>
                            </Button>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                                Hi friends! It's Monday, and we're happy
                        </span>
                            <br />
                            <Link>
                                <span className={classes.cmt}>
                                    Xem tất cả các bình luận
                            </span>
                            </Link>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                                I’ll be needing your help to plant some soon
                        </span>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                            so exciting!
                        </span>
                            <br />
                            <time className={classes.cmt}>
                                <Link>1 ngày trước</Link>
                            </time>

                        </div>
                        <hr />
                        <div className={classes.mycomment}>
                            <Mycomment />
                        </div>
                        <hr />
                    </div>
                </Grid>
                <Grid item className={classes.girdNews} xs={6}>
                    <Name />
                    <div className={classes.imageNews}>
                        <ImageNew />
                    </div>
                    <div className={classes.likecmt}>
                        <div className={classes.like}>
                            <BottonNews />
                        </div>
                        <div className={classes.comment}>
                            <Button className={classes.countlike}>
                                <Typography variant="h15">
                                    6,832 lượt thích
                            </Typography>
                            </Button>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                                Hi friends! It's Monday, and we're happy
                        </span>
                            <br />
                            <Link>
                                <span className={classes.cmt}>
                                    Xem tất cả các bình luận
                            </span>
                            </Link>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                                I’ll be needing your help to plant some soon
                        </span>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                            so exciting!
                        </span>
                            <br />
                            <time className={classes.cmt}>
                                <Link>1 ngày trước</Link>
                            </time>

                        </div>
                        <hr />
                        <div className={classes.mycomment}>
                            <Mycomment />
                        </div>
                        <hr />
                    </div>
                </Grid>
                <Grid item className={classes.girdNews} xs={6}>
                    <Name />
                    <div className={classes.imageNews}>
                        <ImageNew />
                    </div>
                    <div className={classes.likecmt}>
                        <div className={classes.like}>
                            <BottonNews />
                        </div>
                        <div className={classes.comment}>
                            <Button className={classes.countlike}>
                                <Typography variant="h15">
                                    6,832 lượt thích
                            </Typography>
                            </Button>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                                Hi friends! It's Monday, and we're happy
                        </span>
                            <br />
                            <Link>
                                <span className={classes.cmt}>
                                    Xem tất cả các bình luận
                            </span>
                            </Link>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                                I’ll be needing your help to plant some soon
                        </span>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                            so exciting!
                        </span>
                            <br />
                            <time className={classes.cmt}>
                                <Link>1 ngày trước</Link>
                            </time>

                        </div>
                        <hr />
                        <div className={classes.mycomment}>
                            <Mycomment />
                        </div>
                        <hr />
                    </div>
                </Grid>
                <Grid item className={classes.girdNews} xs={6}>
                    <Name />
                    <div className={classes.imageNews}>
                        <ImageNew />
                    </div>
                    <div className={classes.likecmt}>
                        <div className={classes.like}>
                            <BottonNews />
                        </div>
                        <div className={classes.comment}>
                            <Button className={classes.countlike}>
                                <Typography variant="h15">
                                    6,832 lượt thích
                            </Typography>
                            </Button>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                                Hi friends! It's Monday, and we're happy
                        </span>
                            <br />
                            <Link>
                                <span className={classes.cmt}>
                                    Xem tất cả các bình luận
                            </span>
                            </Link>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                                I’ll be needing your help to plant some soon
                        </span>
                            <br />
                            <span className={classes.cmt}>
                                <Link className={classes.link}>ntnhatchang </Link>
                            so exciting!
                        </span>
                            <br />
                            <time className={classes.cmt}>
                                <Link>1 ngày trước</Link>
                            </time>

                        </div>
                        <hr />
                        <div className={classes.mycomment}>
                            <Mycomment />
                        </div>
                        <hr />
                    </div>
                </Grid> 
            </Grid>

        </div>
    )
}
