import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'

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
}));

export const Story = () => {
    const classes = useStyles();
    return (
        <div>
            <hr/>
            <Grid className={classes.grid} xs={6}>
                <div className={classes.carousel}>
                </div>
            </Grid>
            <hr/>
        </div>
    )
}
