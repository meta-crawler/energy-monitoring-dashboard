import React from 'react';
import { Suspense, lazy, ElementType } from 'react';
import LoadingScreen from 'src/components/loading-screen';

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

export const DashboardPage = Loadable(lazy(() => import('src/pages/DashboardPage')));
export const DevicesPage = Loadable(lazy(() => import('src/pages/DevicesPage')));
export const HistoryPage = Loadable(lazy(() => import('src/pages/HistoryPage')));
export const ChargingPage = Loadable(lazy(() => import('src/pages/ComingSoonPage')));
export const AlertPage = Loadable(lazy(() => import('src/pages/AlertPage')));
export const SettingPage = Loadable(lazy(() => import('src/pages/ComingSoonPage')));
