import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { PATH_AFTER_LOGIN } from 'src/config-global';
import DashboardLayout from 'src/layouts/dashboard';

import {
  DashboardPage,
  HistoryPage,
  AlarmPage,
  ExportPage,
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
        { path: 'alarm', element: <AlarmPage /> },
        {
          path: 'devices',
          children: [
            { path: 'systems', element: <SystemPage /> },
            { path: 'strings', element: <StringPage /> },
            { path: 'modules', element: <ModulePage /> },
            { path: 'cells', element: <CellPage /> },
          ],
        },
        { path: 'history', element: <HistoryPage /> },
        { path: 'export', element: <ExportPage /> },
      ],
    },
    { path: '*', element: <Navigate to={PATH_AFTER_LOGIN} replace /> },
  ]);
}
