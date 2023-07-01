import React, { useEffect } from 'react';
import useResponsive from 'src/hooks/useResponsive';
import { useSettingsContext } from 'src/sections/settings';
import colors from 'src/theme/colors';
import navConfig from './config-navigation';
import { NAV } from 'src/config-global';
import NavToggleButton from 'src/layouts/dashboard/nav/NavToggleButton';
import NavSection from 'src/sections/nav-section/NavSection';
import Logo from 'src/components/logo';

export default function NavVertical() {
  const { themeLayout, setLayout } = useSettingsContext();
  const isDesktop = useResponsive('up', 'lg');
  const isMobile = useResponsive('down', 'md');

  useEffect(() => {
    if (isMobile && themeLayout !== 'mini') setLayout('mini');
    if (isDesktop && themeLayout === 'mini') setLayout('vertical');
  }, [isMobile, isDesktop, themeLayout, setLayout]);

  return (
    <div
      style={{
        width: themeLayout === 'mini' ? `${NAV.W_DASHBOARD_MINI}px` : `${NAV.W_DASHBOARD}px`,
        height: '100vh',
        flexShrink: isDesktop ? 0 : 1,
        backgroundColor: colors('grey.800'),
      }}
    >
      <div
        className={`flex flex-col py-2 overflow-y-auto transition-all ease-in-out duration-200 ${
          themeLayout !== 'mini' ? 'gap-y-6' : 'gap-y-2'
        }`}
      >
        <div
          className={`flex flex-row items-center ${
            themeLayout === 'mini' ? 'justify-center' : 'justify-between pl-6 pr-3'
          }`}
        >
          {themeLayout !== 'mini' && <Logo />}
          <NavToggleButton />
        </div>

        <NavSection data={navConfig} />
      </div>
    </div>
  );
}
