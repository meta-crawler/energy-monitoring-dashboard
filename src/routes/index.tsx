import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { PATH_AFTER_LOGIN } from 'src/config-global';
import DashboardLayout from 'src/layouts/dashboard';

import {
  DashboardPage,
  HistoryPage,
  ChargingPage,
  AlertPage,
  SettingPage,
  CellPage,
  ModulePage,
  StringPage,
  SystemPage,
} from './elements';

export default function Router() {
  return useRoutes([
    {
      path: 'caec',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'dashboard', element: <DashboardPage /> },
        {
          path: 'devices',
          children: [
            { path: 'cells', element: <CellPage /> },
            { path: 'modules', element: <ModulePage /> },
            { path: 'strings', element: <StringPage /> },
            { path: 'systems', element: <SystemPage /> },
          ],
        },
        { path: 'history', element: <HistoryPage /> },
        { path: 'charge', element: <ChargingPage /> },
        { path: 'alert', element: <AlertPage /> },
        { path: 'setting', element: <SettingPage /> },
      ],
    },
    { path: '*', element: <Navigate to={PATH_AFTER_LOGIN} replace /> },
  ]);
}
