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
// Redux
import { useDispatch, useSelector } from 'src/redux/store';

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

      <div className="flex flex-col md:flex-row items-center gap-3 pb-6">
        <DropDown
          name="string"
          selected={string}
          options={Strings}
          placeholder="Select String"
          style="md:w-64"
          showClose={true}
          onChange={(v) => setString(v)}
        />
        <DropDown
          name="module"
          selected={module}
          options={moduleOptions}
          placeholder="Select Module"
          style="md:w-64"
          showClose={true}
          onChange={(v) => setModule(v)}
        />
        <DropDown
          name="alarmLevel"
          selected={alarmLevel}
          options={AlarmLevels}
          placeholder="Select Alarm Level"
          style="md:w-64"
          showClose={true}
          onChange={(v) => setAlarmLevel(v)}
        />
      </div>
    </div>
  );
}
