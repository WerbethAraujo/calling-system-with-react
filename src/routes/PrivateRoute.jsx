import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({ isPrivate }) {
  return isPrivate ? <Outlet /> : <Navigate to='/' />;
}
