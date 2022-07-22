import React from 'react';
import { Box } from '@mui/material';

const Container = ({ children }) => (
    <Box
        component={'section'}
        sx={{
            p: '65px',
            top: '64px',
            ml: '235px',
            position: 'absolute',
            backgroundColor: '#f1f9fe',
            width: 'calc(100% - 235px)',
            height: 'calc(100% - 64px)',
        }}
    >
        {children}
    </Box>
);

export default Container;
