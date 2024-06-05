import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import EstateDetails from '../Pages/EstateDetails/EstateDetails';
import PrivateRoute from '../Provider/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><EstateDetails /></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default router;