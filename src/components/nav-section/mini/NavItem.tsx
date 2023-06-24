import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import useActiveLink from 'src/hooks/useActiveLink';
import useAssets from 'src/hooks/useAssets';
import { NavItemProps } from 'src/components/nav-section/mini/types';
import { ICON } from 'src/config-global';

export default function NavItem({ title, path, icon }: NavItemProps) {
  const assets = useAssets();
  const { active } = useActiveLink(path);
  return (
    <RouterLink to={path}>
      <div
        className={`w-full flex flex-row items-center px-8 py-4 gap-x-4 ${
          active ? 'bg-grey-900' : 'bg-grey-800'
        }`}
      >
        <img src={(assets as any)[icon]} alt={title} className={`h-[${ICON.NAV_ITEM_MINI}px]`} />
      </div>
    </RouterLink>
  );
}
