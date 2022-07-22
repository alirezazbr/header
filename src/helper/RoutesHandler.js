import { Route, Routes } from 'react-router-dom';

const RoutesHandler = ({ routes }) => (
    <Routes>
        {
            routes.map((item) => {
                const { path, component, ...props } = item;

                return (
                    <Route
                        {...props}
                        key={path}
                        path={path}
                        element={component}
                    />
                )
            })
        }
    </Routes>
);

export default RoutesHandler;
