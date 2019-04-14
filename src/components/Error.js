import React from "react";
import Grid from "@material-ui/core/Grid";

const Error = ({ text }) => (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "300px" }}
    >
        <Grid item xs={3}>
            <h4>{text}</h4>
        </Grid>
    </Grid>
);

export default Error;
