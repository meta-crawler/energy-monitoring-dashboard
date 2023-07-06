export type INavItem = {
  title: string;
  path: string;
  icon: string;
  children?: INavItem[];
};

export type INavItemProps = {
  title: string;
  path: string;
  icon: string;
  depth: number;
  hasChildren?: boolean;
  open?: boolean;
  onToggle?: () => void;
};

export type INavListProps = {
  data: INavItem;
  depth: number;
  hasChildren: boolean;
};
