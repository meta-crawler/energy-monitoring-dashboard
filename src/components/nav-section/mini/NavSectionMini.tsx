import React, { memo } from 'react';
import NavItem from 'src/components/nav-section/mini/NavItem';
import { NavItemProps } from 'src/components/nav-section/mini/types';

function NavSectionMini(data: NavItemProps[]) {
  return (
    <div className="flex flex-col">
      {data.map((item: NavItemProps) => (
        <NavItem title={item.title} path={item.path} icon={item.icon} />
      ))}
    </div>
  );
}

export default memo(NavSectionMini);
