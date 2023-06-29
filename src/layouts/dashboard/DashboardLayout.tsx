import React from 'react';
import { Outlet } from 'react-router-dom';
import { DASHBOARD, NAV } from 'src/config-global';
import { useSettingsContext } from 'src/sections/settings';

import NavVertical from 'src/layouts/dashboard/nav/NavVertical';

export default function DashboardLayout() {
  const { themeLayout } = useSettingsContext();
  return (
    <div className="flex flex-row h-screen">
      <NavVertical />
      <div
        className="h-screen overflow-y-auto bg-background-paper"
        style={{
          width:
            themeLayout === 'mini'
              ? `calc(100% - ${NAV.W_DASHBOARD_MINI}px)`
              : `calc(100% - ${NAV.W_DASHBOARD}px)`,
          padding: `${DASHBOARD.PADDING}px`,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
