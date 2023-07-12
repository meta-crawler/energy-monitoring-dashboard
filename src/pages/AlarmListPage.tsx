import React, { useState, useEffect } from 'react';
import typography from 'src/theme/typography';
import { CARD } from 'src/config-global';
import { shadows as customShadows } from 'src/theme/shadows';
// UI
import DropDown from 'src/components/dropdown';
import Pagination from 'src/components/pagination';
import Empty from 'src/components/empty';
import LoadingIndicator from 'src/components/loading-indicator';
import { IDropdownItem, InitOption } from 'src/components/dropdown/type';
import { BiLink } from 'react-icons/bi';
// Redux
import { useDispatch, useSelector } from 'src/redux/store';
import { IAlarmInfo, IAlarmLevel } from 'src/@types/alarm';
import { getAlarmList } from 'src/redux/slices/alarm';
import { useNavigate } from 'react-router-dom';

const AlarmTypes = [
  { key: 'overT', value: 'Over Temperature' },
  { key: 'overCharging', value: 'Over Charge' },
  { key: 'overDisCharging', value: 'Over Discharge' },
  { key: 'rs485', value: 'RS485 Fail' },
];

const AlarmLevels = [
  { key: 'Normal', value: 'Normal' },
  { key: 'Warning', value: 'Warning' },
  { key: 'Abnormal', value: 'Abnormal' },
];

export default function AlarmListPage() {
  const dispatch = useDispatch();
  const { isLoading, alarmList } = useSelector((store) => store.alarm);
  const navigate = useNavigate();
  const shadows = customShadows();
  const [alarmType, setAlarmType] = useState<IDropdownItem>(InitOption);
  const [alarmLevel, setAlarmLevel] = useState<IDropdownItem>(InitOption);
  const [alarms, setAlarms] = useState<IAlarmInfo[]>();

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(alarmList?.length);

  const handlePage = (page: number) => setPage(page);
  const handleLimit = (limit: number) => setLimit(limit);

  const gotoDevicePage = () => {};

  useEffect(() => {
    dispatch(getAlarmList(25));
  }, [dispatch]);

  useEffect(() => {
    let filteredAlarms = alarmList;

    if (alarmType.value)
      filteredAlarms = filteredAlarms?.filter(
        (alarm) => alarm.type == alarmType.value,
      ) as IAlarmInfo[];

    if (alarmLevel.value)
      filteredAlarms = filteredAlarms?.filter(
        (alarm) => alarm.level == alarmLevel.value,
      ) as IAlarmInfo[];

    setTotal(filteredAlarms?.length);

    setAlarms(filteredAlarms?.slice(page * limit, (page + 1) * limit));
  }, [alarmList, page, limit, alarmType, alarmLevel]);

  const alarmLevelBadge = (level: IAlarmLevel) => {
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
  };

  const alarmStatusBadge = (status: number) => {
    const color = status ? 'bg-success-main' : 'bg-warning-main';

    return (
      <span
        className={`px-4 py-2 rounded-full text-white font-medium ${color}`}
        style={typography.caption}
      >
        {status ? 'Fixed' : 'Pending'}
      </span>
    );
  };

  return (
    <div
      className="w-full bg-white"
      style={{
        boxShadow: shadows[CARD.BOX_SHADOW],
        borderRadius: `${CARD.BORDER_RADIUS}px`,
        padding: `${CARD.PADDING_LARGE}px`,
      }}
    >
      <p className="text-text-primary pt-3 pb-6" style={typography.h3}>
        System Alarm List
      </p>

      <div className="flex flex-col md:flex-row items-center gap-3 pb-6">
        <DropDown
          name="alarmType"
          selected={alarmType}
          options={AlarmTypes}
          placeholder="Select Alarm Type"
          style="md:w-80"
          showClose={true}
          onChange={(v) => setAlarmType(v)}
        />
        <DropDown
          name="alarmLevel"
          selected={alarmLevel}
          options={AlarmLevels}
          placeholder="Select Alarm Level"
          style="md:w-80"
          showClose={true}
          onChange={(v) => setAlarmLevel(v)}
        />
      </div>

      <div className="relative overflow-x-auto overflow-y-auto bg-white rounded-lg border border-grey-300">
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
                Type
              </th>
              <th scope="col" className="px-2 py-4">
                Level
              </th>
              <th scope="col" className="px-2 py-4">
                Message
              </th>
              <th scope="col" className="px-2 py-4">
                Time
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
            {isLoading ? (
              <tr>
                <td className="w-full py-3" colSpan={9}>
                  <LoadingIndicator />
                </td>
              </tr>
            ) : alarms && alarms.length ? (
              alarms.map((alarm, index) => (
                <tr
                  key={index}
                  className={`${index % 2 ? 'bg-grey-200' : 'bg-white'} ${index && 'border-t'}`}
                >
                  <th scope="row" className="px-3 py-4 font-regular" style={typography.body2}>
                    {page * limit + index + 1}
                  </th>
                  <td className="px-3 py-4">{alarm.type}</td>
                  <td className="px-3 py-4">{alarmLevelBadge(alarm.level as IAlarmLevel)}</td>
                  <td className="px-3 py-4">{alarm.message}</td>
                  <td className="px-3 py-4">{alarmStatusBadge(alarm.status)}</td>
                  <td className="px-3 py-4">{alarm.time}</td>
                  <td className="px-3 py-4">
                    <div role="button" className="w-full flex items-center justify-center">
                      <BiLink />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="w-full" colSpan={9}>
                  <Empty />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {alarms && !!alarms.length && (
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
