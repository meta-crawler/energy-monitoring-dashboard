import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import typography from 'src/theme/typography';
import { CARD } from 'src/config-global';
import { shadows as customShadows } from 'src/theme/shadows';
// UI
import DropDown from 'src/components/dropdown';
import Empty from 'src/components/empty';
import LoadingIndicator from 'src/components/loading-indicator';
import { IDropdownItem, InitOption } from 'src/components/dropdown/type';
import { IAlarmLevel, AlarmLevels } from 'src/@types/alarm';
import dayjs from 'dayjs';
import type { RangePickerProps } from 'antd/es/date-picker';
import { DatePicker } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { BsFillPrinterFill } from 'react-icons/bs';
// Redux
import { useDispatch, useSelector } from 'src/redux/store';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const Strings = [...Array(3)].map((_, index) => ({
  key: (index + 1).toString(),
  value: `String ${index + 1}`,
})) as IDropdownItem[];

export default function HistoryModulePage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const shadows = customShadows();

  const [string, setString] = useState<IDropdownItem>(InitOption);
  const [module, setModule] = useState<IDropdownItem>(InitOption);
  const [moduleOptions, setModuleOptions] = useState<IDropdownItem[]>();
  const [alarmLevel, setAlarmLevel] = useState<IDropdownItem>(InitOption);
  const [dateRange, setDateRange] = useState<string[]>([
    dayjs().format('YYYY-MM-DD'),
    dayjs().subtract(1, 'week').format('YYYY-MM-DD'),
  ]);

  useEffect(() => {
    setModuleOptions(
      [...Array.from({ length: 20 }, (_, index) => Number(string.key) * 20 + index)].map(
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

  const handleDateChange = (value: RangePickerProps['value'], dateString: [string, string]) => {
    setDateRange(dateString);
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
        History Chart - Module
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 items-center gap-3 pb-6">
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
        <div className="col-span-1">
          <DropDown
            name="alarmLevel"
            selected={alarmLevel}
            options={AlarmLevels}
            placeholder="Select Alarm Level"
            showClose={true}
            onChange={(v) => setAlarmLevel(v)}
          />
        </div>
        <div className="col-span-1 md:col-span-2 xl:col-span-1">
          <RangePicker
            size="large"
            value={[dayjs(dateRange[0], dateFormat), dayjs(dateRange[1], dateFormat)]}
            onChange={handleDateChange}
            className="w-full lounded-lg hover:!border-grey-500"
          />
        </div>
        <div className="col-span-1 flex flex-row items-center gap-1 xl:gap-3">
          <div
            role="button"
            className="flex flex-row items-center justify-center w-full gap-x-2 text-white bg-info-main hover:bg-info-dark focus:ring-4 focus:ring-info-dark font-medium rounded-lg text-sm h-10 text-center focus:outline-none"
          >
            <FiSearch />
            Search
          </div>
          <div
            role="button"
            className="flex flex-row items-center justify-center w-full gap-x-2 text-white bg-success-main hover:bg-success-dark focus:ring-4 focus:ring-success-dark font-medium rounded-lg text-sm h-10 text-center focus:outline-none"
          >
            <BsFillPrinterFill />
            Export
          </div>
        </div>
      </div>
    </div>
  );
}
