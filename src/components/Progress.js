import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const Progress = () => (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "300px" }}
    >
        <Grid item xs={3}>
            <CircularProgress />
        </Grid>
    </Grid>
);

export default Progress;
