import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = ({text}) =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h5" color="inherit">
                {text}
            </Typography>
        </Toolbar>
    </AppBar>

export default Header