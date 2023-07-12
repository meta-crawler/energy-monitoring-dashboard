import React from 'react';
import { IAlarmLevel } from 'src/@types/alarm';
import typography from 'src/theme/typography';

export default function AlarmLevelBadge({ level }: { level: IAlarmLevel }) {
  let color = '';
  switch (level) {
    case IAlarmLevel.NORMAL:
      color = 'bg-success-main';
      break;
    case IAlarmLevel.WARNING:
      color = 'bg-warning-main';
      break;
    case IAlarmLevel.ABNORMAL:
      color = 'bg-error-main';
      break;
    default:
      color = 'bg-grey-300';
      break;
  }

  return (
    <span
      className={`text-white font-medium ${color} py-2 px-4 rounded-full`}
      style={typography.caption}
    >
      {level}
    </span>
  );
}
