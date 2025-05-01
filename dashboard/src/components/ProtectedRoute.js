import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies(['token']);  // Check for token in cookies

  if (!cookies.token) {
    return <Navigate to="/login" />;  // If no token, redirect to login
  }

  return children;  // Otherwise, allow the children component to be rendered (Dashboard)
};

export default ProtectedRoute;