import React, { useState, useEffect } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import typography from 'src/theme/typography';
import { CARD } from 'src/config-global';
import { shadows as customShadows } from 'src/theme/shadows';
// UI
import { DropDown, Pagination, Empty, AlarmLevelBadge, LoadingIndicator } from 'src/components';
import { IDropdownItem, InitOption } from 'src/components/dropdown/type';
import { IAlarmLevel, AlarmLevels } from 'src/@types/alarm';
import { BiLink } from 'react-icons/bi';
// Redux
import { useDispatch, useSelector } from 'src/redux/store';
import { IModuleInfo } from 'src/@types/module';
import { getModules } from 'src/redux/slices/module';

const Strings = [...Array(3)].map((_, index) => ({
  key: (index + 1).toString(),
  value: `String ${index + 1}`,
})) as IDropdownItem[];

export default function ModulesPage() {
  const dispatch = useDispatch();
  const { isLoading, modules } = useSelector((store) => store.module);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const shadows = customShadows();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(modules?.length);

  const [string, setString] = useState<IDropdownItem>(InitOption);
  const [module, setModule] = useState<IDropdownItem>(InitOption);
  const [moduleOptions, setModuleOptions] = useState<IDropdownItem[]>();
  const [moduleList, setModuleList] = useState<IModuleInfo[]>();
  const [alarmLevel, setAlarmLevel] = useState<IDropdownItem>(InitOption);

  const handlePage = (page: number) => setPage(page);
  const handleLimit = (limit: number) => setLimit(limit);

  useEffect(() => {
    dispatch(getModules(Number(searchParams.get('string')), Number(searchParams.get('module'))));
  }, [dispatch, searchParams]);

  useEffect(() => {
    setModuleOptions(
      [...Array.from({ length: 20 }, (_, index) => (Number(string.key) - 1) * 20 + index)].map(
        (index) => ({
          key: (index + 1).toString(),
          value: `Module ${index + 1}`,
        }),
      ),
    );
  }, [string]);

  useEffect(() => {
    const stringFromUrl = searchParams.get('string');
    const moduleFromUrl = searchParams.get('module');
    const cellFromUrl = searchParams.get('cell');
    const alarmLevelFromUrl = searchParams.get('alarmLevel');

    if (stringFromUrl && Strings && Strings.length) {
      if (Strings.find((item) => item.key === stringFromUrl)) {
        setString(Strings.find((item) => item.key === stringFromUrl) as IDropdownItem);
      }
    }
    if (moduleFromUrl && moduleOptions && moduleOptions.length) {
      if (moduleOptions.find((item) => item.key === moduleFromUrl)) {
        setModule(moduleOptions.find((item) => item.key === moduleFromUrl) as IDropdownItem);
      }
    }
    if (alarmLevelFromUrl) {
      setAlarmLevel(AlarmLevels.find((item) => item.key === alarmLevelFromUrl) as IDropdownItem);
    }
  }, [searchParams, moduleOptions]);

  useEffect(() => {
    let filteredModules = modules;

    if (string.value)
      filteredModules = filteredModules?.filter(
        (item) => item.string === Number(string.key),
      ) as IModuleInfo[];

    if (module.value)
      filteredModules = filteredModules?.filter(
        (item) => item.module === Number(module.key),
      ) as IModuleInfo[];

    switch (alarmLevel.value) {
      case IAlarmLevel.NORMAL:
        filteredModules = filteredModules?.filter(
          (item) => item.tempStatus === IAlarmLevel.NORMAL && item.vStatus === IAlarmLevel.NORMAL,
        ) as IModuleInfo[];
        break;
      case IAlarmLevel.WARNING:
        filteredModules = filteredModules?.filter(
          (item) => item.tempStatus === IAlarmLevel.WARNING || item.vStatus === IAlarmLevel.WARNING,
        ) as IModuleInfo[];
        break;
      case IAlarmLevel.ABNORMAL:
        filteredModules = filteredModules?.filter(
          (item) =>
            item.tempStatus === IAlarmLevel.ABNORMAL || item.vStatus === IAlarmLevel.ABNORMAL,
        ) as IModuleInfo[];
        break;
      default:
        break;
    }

    setTotal(filteredModules?.length);

    setModuleList(filteredModules?.slice(page * limit, (page + 1) * limit));
  }, [modules, page, limit, string, module, alarmLevel]);
  const gotoHistoryPage = (level: IAlarmLevel, string: number, module: number) => {
    navigate({
      pathname: '/caec/history/module',
      search: `?${createSearchParams({
        string: `${string}`,
        module: `${module}`,
        alarmLevel: level,
      })}`,
    });
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
        Module List
      </p>

      <div className="flex flex-col md:flex-row items-center gap-3 pb-6">
        <DropDown
          name="string"
          selected={string}
          options={Strings}
          placeholder="Select String"
          style="md:w-80"
          showClose={true}
          onChange={(v) => setString(v)}
        />
        <DropDown
          name="module"
          selected={module}
          options={moduleOptions}
          placeholder="Select Module"
          style="md:w-80"
          showClose={true}
          onChange={(v) => setModule(v)}
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
                StringID
              </th>
              <th scope="col" className="px-2 py-4">
                ModuleID
              </th>
              <th scope="col" className="px-2 py-4">
                Time
              </th>
              <th scope="col" className="px-2 py-4">
                Status-Temperature
              </th>
              <th scope="col" className="px-2 py-4">
                Status-Voltage
              </th>
              <th scope="col" className="px-2 py-4">
                Module Voltage
              </th>
              <th scope="col" className="px-2 py-4">
                Module Current
              </th>
              <th scope="col" className="px-2 py-4">
                Temperature_01
              </th>
              <th scope="col" className="px-2 py-4">
                Temperature_02
              </th>
              <th scope="col" className="px-2 py-4">
                Soc
              </th>
              <th scope="col" className="px-2 py-4">
                Link to data
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td className="w-full py-3" colSpan={12}>
                  <LoadingIndicator />
                </td>
              </tr>
            ) : moduleList && moduleList.length ? (
              moduleList.map((module, index) => (
                <tr
                  key={index}
                  className={`${index % 2 ? 'bg-grey-200' : 'bg-white'} ${index && 'border-t'}`}
                >
                  <th scope="row" className="px-3 py-4 font-regular" style={typography.body2}>
                    {page * limit + index + 1}
                  </th>
                  <td className="px-3 py-4">{module.string}</td>
                  <td className="px-3 py-4">{module.module}</td>
                  <td className="px-3 py-4">{module.time}</td>
                  <td className="px-3 py-4">
                    <AlarmLevelBadge level={module.tempStatus} />
                  </td>
                  <td className="px-3 py-4">
                    <AlarmLevelBadge level={module.vStatus} />
                  </td>
                  <td className="px-3 py-4">{module.voltage}</td>
                  <td className="px-3 py-4">{module.current}</td>
                  <td className="px-3 py-4">{module.temp_01}</td>
                  <td className="px-3 py-4">{module.temp_02}</td>
                  <td className="px-3 py-4">{module.soc}</td>
                  <td className="px-3 py-4">
                    <div role="button" className="w-full flex items-center justify-center">
                      <BiLink
                        onClick={() =>
                          gotoHistoryPage(
                            module.tempStatus as IAlarmLevel,
                            module.string,
                            module.module,
                          )
                        }
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="w-full" colSpan={12}>
                  <Empty />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {moduleList && !!moduleList.length && (
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
