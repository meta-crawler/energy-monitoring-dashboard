import React, { useMemo } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import useActiveLink from 'src/hooks/useActiveLink';
import { useSettingsContext } from 'src/sections/settings';
import { ICON } from 'src/config-global';
import colors from 'src/theme/colors';
import typography from 'src/theme/typography';
import NavIcon from './NavIcon';
import { INavItemProps } from './types';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

export default function NavItem({
  title,
  path,
  icon,
  depth,
  hasChildren,
  open,
  onToggle,
}: INavItemProps) {
  const { active } = useActiveLink(path);
  const { themeLayout } = useSettingsContext();
  const subItem = depth !== 1;
  const { pathname } = useLocation();

  const color = useMemo(() => (active ? colors('grey.0') : colors('grey.600')), [active]);

  return (
    <RouterLink to={hasChildren ? pathname : path} className="w-full">
      <div
        className={`w-full flex flex-row items-center h-14 hover:bg-grey-900/30 ${
          active && !hasChildren ? 'bg-grey-900/60' : subItem ? 'bg-grey-900/10' : 'bg-grey-800'
        } ${themeLayout === 'mini' ? 'px-0 justify-center' : 'px-6 justify-between'}`}
        onClick={onToggle}
      >
        <div className="flex flex-row items-center gap-x-6">
          <NavIcon icon={icon} size={ICON.NAV_ITEM_MINI} color={color} />
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
        {hasChildren &&
          themeLayout !== 'mini' &&
          (open ? <FaChevronDown color={color} /> : <FaChevronRight color={color} />)}
      </div>
    </RouterLink>
  );
}
