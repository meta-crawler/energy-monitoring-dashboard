import { AiFillDashboard } from 'react-icons/ai';
import { AiFillSetting } from 'react-icons/ai';
import { FaChartSimple } from 'react-icons/fa6';
import { TbDeviceImac } from 'react-icons/tb';
import { IoBatteryCharging } from 'react-icons/io5';
import { HiBellAlert } from 'react-icons/hi2';
import { TbAlertTriangleFilled } from 'react-icons/tb';

import { PATH_DASHBOARD } from 'src/routes/paths';

const navConfig = [
  {
    title: 'dashboard',
    path: PATH_DASHBOARD.dashboard,
    icon: AiFillDashboard,
  },
  {
    title: 'devices',
    path: PATH_DASHBOARD.devices,
    icon: TbDeviceImac,
  },
  {
    title: 'history',
    path: PATH_DASHBOARD.history,
    icon: FaChartSimple,
  },
  {
    title: 'charge',
    path: PATH_DASHBOARD.charge,
    icon: IoBatteryCharging,
  },
  {
    title: 'alert',
    path: PATH_DASHBOARD.alert,
    icon: TbAlertTriangleFilled,
  },
  {
    title: 'setting',
    path: PATH_DASHBOARD.setting,
    icon: 'setting',
  },
];

export default navConfig;
