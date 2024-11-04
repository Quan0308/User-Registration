import { Navigate } from 'react-router-dom';
import Home from './apps/registration/home';
import LogIn from './apps/registration/login';
import Register from './apps/registration/register';
export default [
  {
    path: '/',
    element: <Navigate to={'/home'} replace />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <LogIn />
  },
  {
    path: '/home',
    element: <Home />
  }
];
