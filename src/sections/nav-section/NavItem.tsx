import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import useActiveLink from 'src/hooks/useActiveLink';
import { useSettingsContext } from 'src/sections/settings';
import { ICON } from 'src/config-global';
import colors from 'src/theme/colors';
import typography from 'src/theme/typography';
import NavIcon from './NavIcon';
import { NavItemProps } from './types';

export default function NavItem({ title, path, icon }: NavItemProps) {
  const { active } = useActiveLink(path);
  const { themeLayout } = useSettingsContext();
  return (
    <RouterLink to={path}>
      <div
        className={`w-full flex flex-row items-center py-4 gap-x-6 hover:bg-grey-900/30 ${
          active ? 'bg-grey-900/60' : 'bg-grey-800'
        } ${themeLayout === 'mini' ? 'px-0 justify-center' : 'px-6'}`}
      >
        <NavIcon
          icon={icon}
          size={ICON.NAV_ITEM_MINI}
          color={active ? colors('grey.0') : colors('grey.600')}
        />
        {themeLayout === 'mini' ? (
          <></>
        ) : (
          <span
            className={`${active ? 'text-white' : 'text-grey-500'} capitalize`}
            style={typography.body1}
          >
            {title}
          </span>
        )}
      </div>
    </RouterLink>
  );
}
