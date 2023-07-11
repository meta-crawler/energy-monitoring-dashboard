import { PATH_DASHBOARD } from 'src/routes/paths';

const navConfig = [
  {
    title: 'dashboard',
    path: PATH_DASHBOARD.dashboard,
    icon: 'dashboard',
  },
  {
    title: 'alarm',
    path: PATH_DASHBOARD.alarm,
    icon: 'alarm',
  },
  {
    title: 'devices',
    path: PATH_DASHBOARD.devices.root,
    icon: 'devices',
    children: [
      {
        title: 'systems',
        path: PATH_DASHBOARD.devices.systems,
        icon: 'systems',
      },
      {
        title: 'strings',
        path: PATH_DASHBOARD.devices.strings,
        icon: 'strings',
      },
      {
        title: 'modules',
        path: PATH_DASHBOARD.devices.modules,
        icon: 'modules',
      },
      {
        title: 'cells',
        path: PATH_DASHBOARD.devices.cells,
        icon: 'cells',
      },
    ],
  },
  {
    title: 'history',
    path: PATH_DASHBOARD.history.root,
    icon: 'history',
    children: [
      {
        title: 'system',
        path: PATH_DASHBOARD.history.system,
        icon: 'history_system',
      },
      {
        title: 'string',
        path: PATH_DASHBOARD.history.string,
        icon: 'history_string',
      },
      {
        title: 'module',
        path: PATH_DASHBOARD.history.module,
        icon: 'history_module',
      },
      {
        title: 'cell',
        path: PATH_DASHBOARD.history.cell,
        icon: 'history_cell',
      },
    ],
  },
  {
    title: 'export',
    path: PATH_DASHBOARD.export,
    icon: 'export',
  },
];

export default navConfig;
