import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

const LoadingPage = () => {
    return (
        <Backdrop
			sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open
		>
			<CircularProgress
				sx={{ color: '#E4E2E2' }}
				color={'success'}
				size={70}
				thickness={5}  />
		</Backdrop>
    );
};

export default LoadingPage;
