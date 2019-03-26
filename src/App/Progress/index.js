import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const Progress = ({data}) =>
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '300px' }}
    >  
        <Grid item xs={3}>
            <h4>{data.text}</h4>
            { data.num == 0 ? <CircularProgress /> : null }
        </Grid>
    </Grid>

export default Progress