import { PATH_DASHBOARD } from 'src/routes/paths';

const navConfig = [
  {
    title: 'dashboard',
    path: PATH_DASHBOARD.dashboard,
    icon: 'dashboard',
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
    path: PATH_DASHBOARD.history,
    icon: 'history',
  },
  {
    title: 'charge',
    path: PATH_DASHBOARD.charge,
    icon: 'charge',
  },
  {
    title: 'alert',
    path: PATH_DASHBOARD.alert,
    icon: 'alert',
  },
  {
    title: 'setting',
    path: PATH_DASHBOARD.setting,
    icon: 'setting',
  },
];

export default navConfig;
