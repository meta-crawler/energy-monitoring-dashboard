import React from 'react';
import useResponsive from 'src/hooks/useResponsive';
import { useSettingsContext } from 'src/components/settings';
import { useColor } from 'src/hooks/useColor';
import navConfig from './config-navigation';
import { NAV } from 'src/config-global';
import NavToggleButton from 'src/layouts/dashboard/nav/NavToggleButton';
import NavSectionMini from 'src/components/nav-section/NavSection';
import { NavItemProps } from 'src/components/nav-section/types';

export default function NavVertical() {
  const { themeLayout } = useSettingsContext();
  const colors = useColor;
  const isDesktop = useResponsive('up', 'lg');
  return (
    <div
      className="flex flex-col py-2 gap-y-2"
      style={{
        width: themeLayout === 'mini' ? `${NAV.W_DASHBOARD_MINI}px` : `${NAV.W_DASHBOARD}px`,
        height: '100vh',
        flexShrink: isDesktop ? 0 : 1,
        backgroundColor: colors('grey.800'),
      }}
    >
      <div
        className={`flex flex-row items-center ${
          themeLayout === 'mini' ? 'justify-center' : 'justify-end px-3'
        }`}
      >
        <NavToggleButton />
      </div>

      <NavSectionMini data={navConfig as NavItemProps[]} />
    </div>
  );
}
