import React from 'react';
import { Navigate } from 'react-router-dom';
import { PATH_DASHBOARD } from 'src/routes/paths';
import LoadingScreen from 'src/sections/loading-screen';
import { useAuthContext } from 'src/auth/useAuthContext';

type GuestGuardProps = {
  children: React.ReactNode;
};

export default function GuestGuard({ children }: GuestGuardProps) {
  const { isAuthenticated, isInitialized } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={PATH_DASHBOARD.root} />;
  }

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  return <> {children} </>;
}
