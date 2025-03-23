import { Navigate, Outlet } from 'react-router';
export const SecureRoutes = () => {
  const authToken = localStorage.getItem('token');
  return authToken ? <Outlet /> : <Navigate to="/login" />;
};
