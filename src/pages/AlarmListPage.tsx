import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, createSearchParams } from 'react-router-dom';
import typography from 'src/theme/typography';
import { CARD } from 'src/config-global';
import { shadows as customShadows } from 'src/theme/shadows';
// UI
import { DropDown, Pagination, Empty, AlarmLevelBadge, LoadingIndicator } from 'src/components';
import { IDropdownItem, InitOption } from 'src/components/dropdown/type';
import { BiLink } from 'react-icons/bi';
// Redux
import { useDispatch, useSelector } from 'src/redux/store';
import { IAlarmInfo, IAlarmLevel, AlarmLevels, AlarmTypes } from 'src/@types/alarm';
import { getAlarmList } from 'src/redux/slices/alarm';

export default function AlarmListPage() {
  const dispatch = useDispatch();
  const { isLoading, alarmList } = useSelector((store) => store.alarm);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const shadows = customShadows();
  const [alarmType, setAlarmType] = useState<IDropdownItem>(InitOption);
  const [alarmLevel, setAlarmLevel] = useState<IDropdownItem>(InitOption);
  const [alarms, setAlarms] = useState<IAlarmInfo[]>();

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(alarmList?.length);

  const handlePage = (page: number) => setPage(page);
  const handleLimit = (limit: number) => setLimit(limit);

  const gotoDevicePage = (level: IAlarmLevel, string: number, module: number, cell?: number) => {
    navigate({
      pathname: '/caec/devices/modules',
      search: `?${createSearchParams({
        string: `${string}`,
        module: `${module}`,
        cell: `${cell}`,
        alarmLevel: level,
      })}`,
    });
  };

  useEffect(() => {
    dispatch(getAlarmList(25));
  }, [dispatch]);

  useEffect(() => {
    const alarmTypeFromUrl = searchParams.get('alarmType');
    const alarmLevelFromUrl = searchParams.get('alarmLevel');

    if (alarmTypeFromUrl) {
      setAlarmType(AlarmTypes.find((type) => type.key === alarmTypeFromUrl) as IDropdownItem);
    }

    if (alarmLevelFromUrl) {
      setAlarmLevel(AlarmLevels.find((level) => level.key === alarmLevelFromUrl) as IDropdownItem);
    }
  }, [searchParams]);

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
                  <td className="px-3 py-4">
                    <AlarmLevelBadge level={alarm.level as IAlarmLevel} />
                  </td>
                  <td className="px-3 py-4">{alarm.message}</td>
                  <td className="px-3 py-4">{alarmStatusBadge(alarm.status)}</td>
                  <td className="px-3 py-4">{alarm.time}</td>
                  <td className="px-3 py-4">
                    <div role="button" className="w-full flex items-center justify-center">
                      <BiLink
                        onClick={() =>
                          gotoDevicePage(
                            alarm.level as IAlarmLevel,
                            alarm.target.string,
                            alarm.target.module,
                            alarm.target.cell,
                          )
                        }
                      />
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
