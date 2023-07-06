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
export const ModulePage = Loadable(lazy(() => import('src/pages/ComingSoonPage')));
export const StringPage = Loadable(lazy(() => import('src/pages/ComingSoonPage')));
export const SystemPage = Loadable(lazy(() => import('src/pages/ComingSoonPage')));
export const HistoryPage = Loadable(lazy(() => import('src/pages/ComingSoonPage')));
export const ChargingPage = Loadable(lazy(() => import('src/pages/ComingSoonPage')));
export const AlertPage = Loadable(lazy(() => import('src/pages/ComingSoonPage')));
export const SettingPage = Loadable(lazy(() => import('src/pages/ComingSoonPage')));
