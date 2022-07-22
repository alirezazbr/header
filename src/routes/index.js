import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { RoutesHandler } from '../helper';
import { LoadingPage } from '../components';

const Main = lazy(() => import('./main'));

const AppRoutes = () => {
    const routes = [
        {
            path: '*',
            component: <Navigate to={'/main/home'} replace />
        },
        {
            path: 'main/*',
            component: (
                <React.Suspense fallback={<LoadingPage />}>
                    <Main />
                </React.Suspense>
            )
        },
    ];

    return (
        <RoutesHandler routes={routes} />
    )
};

export default AppRoutes;
