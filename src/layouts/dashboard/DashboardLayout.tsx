import React from 'react';
import { Outlet } from 'react-router-dom';

import useResponsive from 'src/hooks/useResponsive';
import { useSettingsContext } from 'src/components/settings';
import NavVertical from 'src/layouts/dashboard/nav/NavVertical';

export default function DashboardLayout() {
  const { themeLayout } = useSettingsContext();
  const isDesktop = useResponsive('up', 'lg');
  const isNavMini = themeLayout === 'mini';

  if (isNavMini) {
    return (
      <>
        {isDesktop && <NavVertical />}
        <Outlet />
      </>
    );
  }
}
