import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { PATH_AFTER_LOGIN } from 'src/config-global';
import DashboardLayout from 'src/layouts/dashboard';
import AuthGuard from 'src/auth/AuthGuard';
import GuestGuard from 'src/auth/GuestGuard';

import {
  DashboardPage,
  HistorySystemPage,
  HistoryStringPage,
  HistoryModulePage,
  HistoryCellPage,
  CellPage,
  ModulePage,
  StringPage,
  SystemPage,
  AlarmPage,
  ExportPage,
  LoginPage,
} from './elements';
import { PATH_AUTH } from 'src/routes/paths';

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: <LoginPage />,
        },
      ],
    },
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
        {
          path: 'history',
          children: [
            { path: 'system', element: <HistorySystemPage /> },
            { path: 'string', element: <HistoryStringPage /> },
            { path: 'module', element: <HistoryModulePage /> },
            { path: 'cell', element: <HistoryCellPage /> },
          ],
        },
        { path: 'alarm', element: <AlarmPage /> },
        { path: 'export', element: <ExportPage /> },
      ],
    },
    { path: '*', element: <Navigate to={PATH_AUTH.login} replace /> },
  ]);
}
