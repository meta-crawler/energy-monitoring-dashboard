import React, { memo } from 'react';
import NavList from 'src/sections/nav-section/NavList';
import { INavItem } from 'src/sections/nav-section/types';

function NavSection({ data }: { data: INavItem[] }) {
  return (
    <div className="flex flex-col">
      {data.map((item: INavItem) => (
        <NavList key={item.title + item.path} data={item} depth={1} hasChildren={!!item.children} />
      ))}
    </div>
  );
}

export default memo(NavSection);
