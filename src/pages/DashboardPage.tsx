import React, { useState, useEffect } from 'react';
import { OperationStatus } from 'src/lib/constants/status';
import {
  StatusCard,
  StatusTable,
  BatteryStatus,
  CircularGauge,
  ThermometerGauge,
  AlarmListTable,
  AlertListTable,
} from 'src/sections/dashboard-section';
import { VOLTAGE_OPTIONS, CURRENT_OPTIONS } from 'src/sections/dashboard-section/constants';
import { CARD } from 'src/config-global';
import { shadows as customShadows } from 'src/theme/shadows';
// Redux
import { useDispatch, useSelector } from 'src/redux/store';
import { getDashboardInfo } from 'src/redux/slices/dashboard';
// UI
import { IGaugeInfo, initGaugeInfo } from 'src/@types/dashboard';

export default function DashboardPage() {
  const [gaugeInfo, setGaugeInfo] = useState(initGaugeInfo);
  const dispatch = useDispatch();
  const { gauge, alarmList, alertList } = useSelector((store) => store.dashboard);
  const shadows = customShadows();

  useEffect(() => {
    dispatch(getDashboardInfo());

    setInterval(() => {
      dispatch(getDashboardInfo());
    }, 3000);
  }, [dispatch]);

  useEffect(() => {
    if (gauge) {
      setGaugeInfo({
        chargingStatus: gauge.chargingStatus || initGaugeInfo.chargingStatus,
        soc: gauge.soc || initGaugeInfo.soc,
        voltage: gauge.voltage || initGaugeInfo.voltage,
        current: gauge.current || initGaugeInfo.current,
        maxT: gauge.maxT || initGaugeInfo.maxT,
        minT: gauge.minT || initGaugeInfo.minT,
      });
    }
  }, [gauge]);

  return (
    <div className="w-full h-full flex flex-col p-3 gap-3">
      <div className="h-22 flex flex-col lg:flex-row gap-3">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3">
          <StatusCard system="PCS-M300" status={OperationStatus.NORMAL} title="Overall Status" />
          <StatusCard
            system="PCS-M300"
            status={OperationStatus.WARNING}
            title="Temperature Status"
          />
          <StatusCard
            system="PCS-M300"
            status={OperationStatus.NORMAL}
            title="Overcharging Monitoring"
          />
          <StatusCard
            system="PCS-M300"
            status={OperationStatus.NORMAL}
            title="OverDischarging Monitoring"
          />
        </div>
        <StatusTable />
      </div>
      <div
        className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6 bg-white"
        style={{
          boxShadow: shadows[CARD.BOX_SHADOW],
          borderRadius: `${CARD.BORDER_RADIUS}px`,
          padding: `${CARD.PADDING_LARGE}px ${CARD.PADDING}px`,
        }}
      >
        <div className="col-span-1 flex justify-center">
          <BatteryStatus soc={gaugeInfo?.soc} chargingStatus={!!gaugeInfo?.chargingStatus} />
        </div>
        <div className="col-span-1 flex justify-center -mb-10">
          <CircularGauge
            title="Voltage"
            value={gaugeInfo?.voltage}
            options={{ unit: 'V', border: 9, breakpoints: VOLTAGE_OPTIONS }}
          />
        </div>
        <div className="col-span-1 flex justify-center -mb-10">
          <CircularGauge
            title="Current"
            value={gaugeInfo?.current}
            options={{ unit: 'A', border: 9, breakpoints: CURRENT_OPTIONS }}
          />
        </div>
        <div className="col-span-1 flex flex-row justify-around items-center">
          <ThermometerGauge
            title="Min T"
            string={gaugeInfo?.minT?.string}
            module={gaugeInfo?.minT?.module}
            value={gaugeInfo?.minT?.value}
          />
          <ThermometerGauge
            title="Max T"
            string={gaugeInfo?.maxT?.string}
            module={gaugeInfo?.maxT?.module}
            value={gaugeInfo?.maxT?.value}
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-4 xl:gap-6 pb-3">
        <div className="col-span-1 md:col-span-3">
          <AlarmListTable alarms={alarmList} />
        </div>
        <div className="col-span-1">
          <AlertListTable alerts={alertList} />
        </div>
      </div>
    </div>
  );
}
