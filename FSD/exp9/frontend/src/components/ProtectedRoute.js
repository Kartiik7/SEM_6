import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getStoredRole, isLoggedIn } from '../services/session';

function ProtectedRoute({ allowedRoles, children }) {
  const location = useLocation();
  const role = getStoredRole();

  if (!isLoggedIn()) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    const fallbackPath = role === 'ADMIN' ? '/admin' : '/user';
    return <Navigate to={fallbackPath} replace />;
  }

  return children;
}

export default ProtectedRoute;
