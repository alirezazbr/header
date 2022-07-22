import React from 'react';
import { Box } from '@mui/material';

import { Header } from '../../components';

const Main = ({ children }) => {
    return (
        <Box component={'div'}>
            <Header />
            {children}
        </Box>
    );
};

export default Main;
