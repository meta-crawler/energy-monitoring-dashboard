import React from 'react';
import { Outlet } from 'react-router-dom';

import NavVertical from 'src/layouts/dashboard/nav/NavVertical';

export default function DashboardLayout() {
  return (
    <div className="flex flex-row">
      <NavVertical />
      <Outlet />
    </div>
  );
}
