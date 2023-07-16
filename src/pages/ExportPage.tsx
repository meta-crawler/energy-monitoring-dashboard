import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import typography from 'src/theme/typography';
import { CARD } from 'src/config-global';
import { shadows as customShadows } from 'src/theme/shadows';
import dayjs from 'dayjs';
// UI
import { DropDown, Pagination, Empty, AlarmLevelBadge, LoadingIndicator } from 'src/components';
import { IDropdownItem, InitOption } from 'src/components/dropdown/type';
import { getAlarmLevelFromNumber } from 'src/components/alarm-level-badge/AlarmLevelBadge';
// Redux
import { useDispatch, useSelector } from 'src/redux/store';
import { IExportData } from 'src/@types/export';
import { getExportData } from 'src/redux/slices/export';
import { FiSearch } from 'react-icons/fi';
import { BsFillPrinterFill } from 'react-icons/bs';
import { RangePickerProps } from 'antd/es/date-picker';
import { DatePicker } from 'antd';
// Excel
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

const Strings = [...Array(3)].map((_, index) => ({
  key: (index + 1).toString(),
  value: `String ${index + 1}`,
})) as IDropdownItem[];

export default function ExportPage() {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((store) => store.export);
  const [searchParams] = useSearchParams();
  const shadows = customShadows();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(data?.length);

  const [string, setString] = useState<IDropdownItem>(InitOption);
  const [module, setModule] = useState<IDropdownItem>(InitOption);
  const [moduleOptions, setModuleOptions] = useState<IDropdownItem[]>();
  const [exportData, setExportData] = useState<IExportData[]>();
  const [dateRange, setDateRange] = useState<string[]>([
    dayjs().subtract(1, 'week').format('YYYY-MM-DD'),
    dayjs().format('YYYY-MM-DD'),
  ]);

  const handlePage = (page: number) => setPage(page);
  const handleLimit = (limit: number) => setLimit(limit);

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
    const startDateFromUrl = searchParams.get('startDate');
    const endDateFromUrl = searchParams.get('endDate');

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
    if (startDateFromUrl && endDateFromUrl) {
      setDateRange([startDateFromUrl, endDateFromUrl]);
    }

    if (stringFromUrl && moduleFromUrl && startDateFromUrl && endDateFromUrl) {
      dispatch(
        getExportData(
          Number(stringFromUrl),
          Number(moduleFromUrl),
          startDateFromUrl,
          endDateFromUrl,
        ),
      );
    }
  }, [searchParams, moduleOptions, dispatch]);

  useEffect(() => {
    setTotal(data?.length);
    setExportData(data?.slice(page * limit, (page + 1) * limit));
  }, [page, limit, data]);

  const handleDateChange = (value: RangePickerProps['value'], dateString: [string, string]) => {
    setDateRange(dateString);
  };

  const handleSearch = () => {
    const [startDate, endDate] = dateRange;
    if (startDate && endDate && string.key && module.key) {
      dispatch(getExportData(Number(string.key), Number(module.key), startDate, endDate));
    }
  };

  const handleExport = async () => {
    const [startDate, endDate] = dateRange;
    if (startDate && endDate && string.key && module.key) {
      const fileType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
      const fileExtension = '.xlsx';
      const fileName = `String ${string.key}-Module ${module.key}_${startDate}~${endDate}`;

      const excelData = convertIntoExportDataFormat();

      const ws = XLSX.utils.json_to_sheet(excelData);
      const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const blobData = new Blob([excelBuffer], { type: fileType });

      FileSaver.saveAs(blobData, fileName + fileExtension);
    }
  };

  const convertIntoExportDataFormat = () => {
    if (data && data.length) {
      return data.map((item, idx) => ({
        No: idx + 1,
        'String ID': item.string,
        'Module ID': item.module,
        Time: item.time,
        Alarm: getAlarmLevelFromNumber(item.alarm),
        'Charge Status': item.chargeStatus ? 'Charged' : 'Discharged',
        'Over Temperature Status': getAlarmLevelFromNumber(item.overT),
        'Over Charge Status': getAlarmLevelFromNumber(item.overCharge),
        'Over Discharge Status': getAlarmLevelFromNumber(item.overDischarge),
        Voltage: item.voltage,
        Current: item.current,
      }));
    }

    return [];
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
        Module Data Export
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 items-center gap-3 pb-10">
        <div className="col-span-1">
          <DropDown
            name="string"
            selected={string}
            options={Strings}
            placeholder="Select String"
            showClose={true}
            onChange={(v) => setString(v)}
          />
        </div>
        <div className="col-span-1">
          <DropDown
            name="module"
            selected={module}
            options={moduleOptions}
            placeholder="Select Module"
            showClose={true}
            onChange={(v) => setModule(v)}
          />
        </div>
        <div className="col-span-1 md:col-span-1 xl:col-span-2">
          <RangePicker
            size="large"
            allowClear={false}
            value={[dayjs(dateRange[0], dateFormat), dayjs(dateRange[1], dateFormat)]}
            onChange={handleDateChange}
            className="w-full lounded-lg hover:!border-grey-500"
          />
        </div>
        <div className="col-span-1 flex flex-row items-center gap-1 xl:gap-3">
          <div
            role="button"
            className="flex flex-row items-center justify-center w-full gap-x-2 text-white bg-info-main hover:bg-info-dark focus:ring-4 focus:ring-info-dark font-medium rounded-lg text-sm h-10 text-center focus:outline-none"
            onClick={handleSearch}
          >
            <FiSearch />
            Search
          </div>
          <div
            role="button"
            className="flex flex-row items-center justify-center w-full gap-x-2 text-white bg-success-main hover:bg-success-dark focus:ring-4 focus:ring-success-dark font-medium rounded-lg text-sm h-10 text-center focus:outline-none"
            onClick={handleExport}
          >
            <BsFillPrinterFill />
            Export
          </div>
        </div>
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
                Alarm
              </th>
              <th scope="col" className="px-2 py-4">
                Charge Status
              </th>
              <th scope="col" className="px-2 py-4">
                Over Temperature
              </th>
              <th scope="col" className="px-2 py-4">
                Over Charge
              </th>
              <th scope="col" className="px-2 py-4">
                Over Discharge
              </th>
              <th scope="col" className="px-2 py-4">
                Voltage
              </th>
              <th scope="col" className="px-2 py-4">
                Current
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td className="w-full py-3" colSpan={11}>
                  <LoadingIndicator />
                </td>
              </tr>
            ) : exportData && exportData.length ? (
              exportData.map((data, index) => (
                <tr
                  key={index}
                  className={`${index % 2 ? 'bg-grey-200' : 'bg-white'} ${index && 'border-t'}`}
                >
                  <th scope="row" className="px-3 py-4 font-regular" style={typography.body2}>
                    {page * limit + index + 1}
                  </th>
                  <td className="px-3 py-4">{data.string}</td>
                  <td className="px-3 py-4">{data.module}</td>
                  <td className="px-3 py-4">{data.time}</td>
                  <td className="px-3 py-4">
                    <AlarmLevelBadge level={getAlarmLevelFromNumber(data.alarm)} />
                  </td>
                  <td className="px-3 py-4">
                    <span
                      className={`text-white font-medium ${
                        data.chargeStatus ? 'bg-success-main' : 'bg-warning-main'
                      } py-2 px-4 rounded-full`}
                      style={typography.caption}
                    >
                      {data.chargeStatus ? 'Charged' : 'Discharged'}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <AlarmLevelBadge level={getAlarmLevelFromNumber(data.overT)} />
                  </td>
                  <td className="px-3 py-4">
                    <AlarmLevelBadge level={getAlarmLevelFromNumber(data.overCharge)} />
                  </td>
                  <td className="px-3 py-4">
                    <AlarmLevelBadge level={getAlarmLevelFromNumber(data.overDischarge)} />
                  </td>
                  <td className="px-3 py-4">{data.voltage}</td>
                  <td className="px-3 py-4">{data.current}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="w-full" colSpan={11}>
                  <Empty />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {exportData && !!exportData.length && (
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
