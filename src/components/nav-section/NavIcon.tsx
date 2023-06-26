import React from 'react';

import { AiFillDashboard } from 'react-icons/ai';
import { AiFillSetting } from 'react-icons/ai';
import { FaChartSimple } from 'react-icons/fa6';
import { TbDeviceImac } from 'react-icons/tb';
import { IoBatteryCharging } from 'react-icons/io5';
import { HiBellAlert } from 'react-icons/hi2';
import { TbAlertTriangleFilled } from 'react-icons/tb';

export default function NavIcon({
  icon,
  size,
  color,
}: {
  icon: string;
  size?: number;
  color?: string;
}) {
  switch (icon) {
    case 'dashboard':
      return <AiFillDashboard size={size} color={color} />;
    case 'devices':
      return <TbDeviceImac size={size} color={color} />;
    case 'history':
      return <FaChartSimple size={size} color={color} />;
    case 'charge':
      return <IoBatteryCharging size={size} color={color} />;
    case 'alert':
      return <TbAlertTriangleFilled size={size} color={color} />;
    case 'setting':
      return <AiFillSetting size={size} color={color} />;
    default:
      return <></>;
  }
}
