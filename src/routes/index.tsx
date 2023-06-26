import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { PATH_AFTER_LOGIN } from 'src/config-global';
import DashboardLayout from 'src/layouts/dashboard';

import {
  DashboardPage,
  DevicesPage,
  HistoryPage,
  ChargingPage,
  AlertPage,
  SettingPage,
} from './elements';

export default function Router() {
  return useRoutes([
    {
      path: 'caec',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'dashboard', element: <DashboardPage /> },
        { path: 'devices', element: <DevicesPage /> },
        { path: 'history', element: <HistoryPage /> },
        { path: 'charge', element: <ChargingPage /> },
        { path: 'alert', element: <AlertPage /> },
        { path: 'setting', element: <SettingPage /> },
      ],
    },
    { path: '*', element: <Navigate to={PATH_AFTER_LOGIN} replace /> },
  ]);
}
