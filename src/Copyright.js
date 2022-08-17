import React from 'react';
import Typography from '@mui/material/Typography';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright Sunflower'}
            &nbsp;
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;