import React, { useEffect, useState } from 'react';
import { CARD } from 'src/config-global';
import typography from 'src/theme/typography';
import { shadows as customShadows } from 'src/theme/shadows';
import { BiLink } from 'react-icons/bi';
import { IAlarmInfo, IAlarmLevel } from 'src/@types/alarm';
import { AlarmLevelBadge, Pagination, Empty } from 'src/components';

type IAlarmListTableProps = {
  alarms: IAlarmInfo[] | null;
};

export default function AlarmListTable({ alarms }: IAlarmListTableProps) {
  const shadows = customShadows();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(10);
  const [alarmList, setAlarmList] = useState(alarms?.slice(0, 5));

  useEffect(() => {
    setAlarmList(alarms?.slice(page * limit, (page + 1) * limit));
  }, [page, limit, alarms]);

  const handlePage = (page: number) => setPage(page);
  const handleLimit = (limit: number) => setLimit(limit);

  return (
    <div
      className="w-full bg-white"
      style={{
        boxShadow: shadows[CARD.BOX_SHADOW],
        borderRadius: `${CARD.BORDER_RADIUS}px`,
        padding: `${CARD.PADDING}px`,
      }}
    >
      <p className="text-text-primary mb-6" style={typography.h4}>
        System Alarm Latest list
      </p>
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
            {alarmList && alarmList.length ? (
              alarmList.map((alarm, index) => (
                <tr
                  key={index}
                  className={`${index % 2 ? 'bg-grey-200' : 'bg-white'} ${index && 'border-t'}`}
                >
                  <th scope="row" className="px-3 py-4 font-regular" style={typography.body2}>
                    {index + page * limit + 1}
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
              ))
            ) : (
              <tr>
                <td className="w-full" colSpan={7}>
                  <Empty />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {alarmList && !!alarmList.length && (
        <Pagination
          page={page}
          limit={limit}
          pages={total}
          onPageChange={handlePage}
          onLimitChange={handleLimit}
        />
      )}
    </div>
  );
}
