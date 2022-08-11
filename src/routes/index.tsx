import { Navigate, useRoutes } from 'react-router-dom';

import Main from 'layout/Main';
import Home from 'pages/Home';

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <Main />,
            children: [{ path: '/', element: <Home /> }],
        },
        { path: '*', element: <Navigate to="/" replace /> },
    ]);
}
