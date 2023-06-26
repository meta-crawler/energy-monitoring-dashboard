import React, { memo } from 'react';
import NavItem from 'src/components/nav-section/NavItem';
import { NavItemProps } from 'src/components/nav-section/types';

function NavSection({ data }: { data: NavItemProps[] }) {
  return (
    <div className="flex flex-col">
      {data.map((item: NavItemProps) => (
        <NavItem key={Math.random()} title={item.title} path={item.path} icon={item.icon} />
      ))}
    </div>
  );
}

export default memo(NavSection);
