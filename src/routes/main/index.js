import React, { lazy } from 'react';

import { Main } from '../../pages';
import { RoutesHandler } from '../../helper';

const MainRoutes = () => {
    const routes = [
        
    ];

    return (
        <Main>
            <RoutesHandler routes={routes} />
        </Main>
    );
};

export default MainRoutes;
