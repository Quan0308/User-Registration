import { Navigate } from 'react-router-dom';
import Home from './apps/authentication/home';
import LogIn from './apps/authentication/login';
import Register from './apps/authentication/register';
import Profile from './apps/user/profile';
import ProtectedRoute from './apps/protected';
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
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    )
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    )
  }
];
