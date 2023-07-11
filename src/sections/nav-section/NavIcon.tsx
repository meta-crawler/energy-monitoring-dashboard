import React from 'react';

import { AiFillDashboard } from 'react-icons/ai';
import { AiFillSetting } from 'react-icons/ai';
import { FaChartSimple } from 'react-icons/fa6';
import { TbDeviceImac } from 'react-icons/tb';
import { IoBatteryCharging } from 'react-icons/io5';
import { TbAlertTriangleFilled } from 'react-icons/tb';
import { BsFillPrinterFill } from 'react-icons/bs';
import { HiPresentationChartBar } from 'react-icons/hi';
import { IoBarChart, IoStatsChartSharp } from 'react-icons/io5';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { CellSVG, ModuleSVG, StringSVG, SystemSVG } from 'src/assets/icons';

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
    case 'alarm':
      return <TbAlertTriangleFilled size={size} color={color} />;
    case 'setting':
      return <AiFillSetting size={size} color={color} />;
    case 'export':
      return <BsFillPrinterFill size={size} color={color} />;
    case 'cells':
      return <CellSVG size={size} color={color} />;
    case 'modules':
      return <ModuleSVG size={size} color={color} />;
    case 'strings':
      return <StringSVG size={size} color={color} />;
    case 'systems':
      return <SystemSVG size={size} color={color} />;
    case 'history_cell':
      return <AiOutlineAreaChart size={size} color={color} />;
    case 'history_module':
      return <IoStatsChartSharp size={size} color={color} />;
    case 'history_string':
      return <IoBarChart size={size} color={color} />;
    case 'history_system':
      return <HiPresentationChartBar size={size} color={color} />;
    default:
      return <></>;
  }
}
