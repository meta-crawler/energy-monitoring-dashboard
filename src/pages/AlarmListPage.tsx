import React, { useState, useEffect } from 'react';
import typography from 'src/theme/typography';
import { CARD } from 'src/config-global';
import { shadows as customShadows } from 'src/theme/shadows';
// UI
import DropDown from 'src/components/dropdown';
import Pagination from 'src/components/pagination';
import LoadingIndicator from 'src/components/loading-indicator';
import { IDropdownItem } from 'src/components/dropdown/type';
import { BiLink } from 'react-icons/bi';
// Redux
import { useDispatch, useSelector } from 'src/redux/store';
import { getAlarmList } from 'src/redux/slices/dashboard';
import { IAlarmInfo } from 'src/@types/dashboard';

const AlarmTypes = [
  { key: 'overT', value: 'Over Temperature' },
  { key: 'overCharging', value: 'Over Charge' },
  { key: 'overDisCharging', value: 'Over Discharge' },
  { key: 'rs485', value: 'RS485 Fail' },
];

const AlarmLevels = [
  { key: 'info', value: 'Info' },
  { key: 'warning', value: 'Warning' },
];

export default function AlarmListPage() {
  const dispatch = useDispatch();
  const { isLoading, alarmList } = useSelector((store) => store.dashboard);
  const shadows = customShadows();
  const [alarmType, setAlarmType] = useState<IDropdownItem>({
    key: 'overT',
    value: 'Over Temperature',
  });
  const [alarmLevel, setAlarmLevel] = useState<IDropdownItem>({ key: 'info', value: 'Info' });
  const [alarms, setAlarms] = useState<IAlarmInfo[]>();

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);

  const handlePage = (page: number) => setPage(page);
  const handleLimit = (limit: number) => setLimit(limit);

  useEffect(() => {
    dispatch(getAlarmList(20));
  }, [dispatch]);

  useEffect(() => {
    setAlarms(alarmList?.slice(page * limit, (page + 1) * limit));
  }, [alarmList, page, limit]);

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
          onChange={(v) => setAlarmType(v)}
        />
        <DropDown
          name="alarmLevel"
          selected={alarmLevel}
          options={AlarmLevels}
          placeholder="Select Alarm Level"
          style="md:w-80"
          onChange={(v) => setAlarmLevel(v)}
        />
        <button
          type="submit"
          className="text-white bg-secondary-main hover:bg-secondary-dark focus:ring-2 focus:outline-none focus:ring-secondary-light font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center"
        >
          Search
        </button>
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
            ) : (
              alarms &&
              alarms.map((alarm, index) => (
                <tr
                  key={index}
                  className={`${index % 2 ? 'bg-grey-200' : 'bg-white'} ${index && 'border-t'}`}
                >
                  <th scope="row" className="px-3 py-4 font-regular" style={typography.body2}>
                    {page * limit + index + 1}
                  </th>
                  <td className="px-3 py-4">{alarm.time}</td>
                  <td className="px-3 py-4">{alarm.type}</td>
                  <td className="px-3 py-4">{alarm.level}</td>
                  <td className="px-3 py-4">{alarm.message}</td>
                  <td className="px-3 py-4 capitalize">
                    <span
                      className={`px-2 py-1 rounded-full ${
                        alarm.status
                          ? 'bg-success-main text-success-darker'
                          : 'bg-error-main text-error-darker'
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
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        page={page}
        limit={limit}
        pages={20}
        onPageChange={handlePage}
        onLimitChange={handleLimit}
      />
    </div>
  );
}
