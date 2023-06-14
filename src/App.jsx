import React from 'react';
import { Typography, AppBar, CssBaseline,Toolbar } from '@mui/material'; 
import Album from './Album';

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <Typography variant='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <Album />
        </>
    )
}

export default App;