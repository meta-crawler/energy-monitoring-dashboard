import React, { useState } from 'react';
import { useSettingsContext } from 'src/sections/settings';
import { INavItem, INavListProps } from './types';
import NavItem from 'src/sections/nav-section/NavItem';

export default function NavList({ data, depth, hasChildren }: INavListProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <NavItem
        title={data.title}
        path={data.path}
        icon={data.icon}
        depth={depth}
        hasChildren={hasChildren}
        open={open}
        onToggle={() => setOpen(!open)}
      />

      {hasChildren && open && <NavSubList data={data.children!} depth={depth} />}
    </div>
  );
}

type INavSubProps = {
  data: INavItem[];
  depth: number;
};

function NavSubList({ data, depth }: INavSubProps) {
  const { themeLayout } = useSettingsContext();

  return (
    <div
      className={`flex flex-col ${
        themeLayout === 'mini' && 'border-y border-t-grey-600/30 border-b-grey-600/30'
      }`}
    >
      {data.map((item) => (
        <NavItem
          key={item.title + item.path}
          title={item.title}
          path={item.path}
          icon={item.icon}
          depth={depth + 1}
        />
      ))}
    </div>
  );
}
