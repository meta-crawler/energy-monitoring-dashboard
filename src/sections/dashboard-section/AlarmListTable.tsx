import React from 'react';
import { CARD } from 'src/config-global';
import typography from 'src/theme/typography';
import { shadows as customShadows } from 'src/theme/shadows';
import { BiLink } from 'react-icons/bi';
import { IAlarmInfo, IAlarmLevel } from 'src/@types/alarm';
import AlarmLevelBadge from 'src/components/alarm-level-badge';

type IAlarmListTableProps = {
  alarms: IAlarmInfo[] | null;
};

export default function AlarmListTable({ alarms }: IAlarmListTableProps) {
  const shadows = customShadows();
  return (
    <div
      className="w-full bg-white"
      style={{
        boxShadow: shadows[CARD.BOX_SHADOW],
        borderRadius: `${CARD.BORDER_RADIUS}px`,
        padding: `${CARD.PADDING}px`,
      }}
    >
      <div className="relative overflow-x-auto bg-white rounded-lg border border-grey-300">
        <table className="w-full text-center">
          <thead
            className="bg-grey-200 text-text-primary border-b border-b-grey-300"
            style={typography.overline}
          >
            <tr>
              <th scope="col" className="px-2 py-4">
                No
              </th>
              <th scope="col" className="px-2 py-4">
                Time
              </th>
              <th scope="col" className="px-2 py-4">
                Type
              </th>
              <th scope="col" className="px-2 py-4">
                Level
              </th>
              <th scope="col" className="px-2 py-4">
                Message
              </th>
              <th scope="col" className="px-2 py-4">
                Fixed Status
              </th>
              <th scope="col" className="px-2 py-4">
                Link to data
              </th>
            </tr>
          </thead>
          <tbody>
            {alarms &&
              alarms.map((alarm, index) => (
                <tr
                  key={index}
                  className={`${index % 2 ? 'bg-grey-200' : 'bg-white'} ${index && 'border-t'}`}
                >
                  <th scope="row" className="px-3 py-4 font-regular" style={typography.body2}>
                    {index + 1}
                  </th>
                  <td className="px-3 py-4">{alarm.time}</td>
                  <td className="px-3 py-4">{alarm.type}</td>
                  <td className="px-3 py-4">
                    <AlarmLevelBadge level={alarm.level as IAlarmLevel} />
                  </td>
                  <td className="px-3 py-4">{alarm.message}</td>
                  <td className="px-3 py-4 capitalize">
                    <span
                      className={`px-4 py-2 rounded-full text-white font-medium ${
                        alarm.status ? 'bg-success-main' : 'bg-error-main'
                      }`}
                      style={typography.caption}
                    >
                      {alarm.status ? 'Fixed' : 'Pending'}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <div role="button" className="w-full flex items-center justify-center">
                      <BiLink />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
