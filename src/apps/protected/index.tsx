import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { ReactNode } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: PrivateRouteProps) {
  const token = useAuthStore(state => state.token);
  const location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
}
