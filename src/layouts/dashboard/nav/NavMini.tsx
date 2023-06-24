import React from 'react';
import useResponsive from 'src/hooks/useResponsive';
import { useColor } from 'src/hooks/useColor';
import navConfig from './config-navigation';
import NavToggleButton from 'src/layouts/dashboard/nav/NavToggleButton';
import { NAV } from 'src/config-global';

export default function NavMini() {
  const colors = useColor;
  const isDesktop = useResponsive('up', 'lg');
  return (
    <div
      className="py-2"
      style={{
        width: `${NAV.W_DASHBOARD_MINI}px`,
        height: '100vh',
        flexShrink: isDesktop ? 0 : 1,
        backgroundColor: colors('grey.800'),
      }}
    >
      <div className="flex flex-row items-center justify-center">
        <NavToggleButton />
      </div>
    </div>
  );
}
