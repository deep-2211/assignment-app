import { Navigate, Route, Routes } from 'react-router';
import AppLayout from './components/AppLayout';
import UsersOverview from './pages/UsersOverview';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import { SecureRoutes } from './components/SecureRoutes';

export default function AppRouting() {
  return (
    <Routes>
      <Route index element={<Navigate to="/app" />} />
      <Route path="/app" element={<SecureRoutes />}>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/app/users-overview" />} />
          <Route path="users-overview" element={<UsersOverview />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
