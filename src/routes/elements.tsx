import React from 'react';
import { Suspense, lazy, ElementType } from 'react';
import LoadingScreen from 'src/sections/loading-screen';

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

export const DashboardPage = Loadable(lazy(() => import('src/pages/DashboardPage')));
export const CellPage = Loadable(lazy(() => import('src/pages/ComingSoonPage')));
export const ModulePage = Loadable(lazy(() => import('src/pages/devices/ModulesPage')));
export const StringPage = Loadable(lazy(() => import('src/pages/ComingSoonPage')));
export const SystemPage = Loadable(lazy(() => import('src/pages/ComingSoonPage')));
export const AlarmPage = Loadable(lazy(() => import('src/pages/AlarmListPage')));
export const ExportPage = Loadable(lazy(() => import('src/pages/ExportPage')));
export const HistorySystemPage = Loadable(lazy(() => import('src/pages/ComingSoonPage')));
export const HistoryStringPage = Loadable(lazy(() => import('src/pages/ComingSoonPage')));
export const HistoryModulePage = Loadable(lazy(() => import('src/pages/history/ModulePage')));
export const HistoryCellPage = Loadable(lazy(() => import('src/pages/ComingSoonPage')));
export const LoginPage = Loadable(lazy(() => import('src/pages/auth/LoginPage')));
