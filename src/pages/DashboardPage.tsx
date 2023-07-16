import React, { useEffect, useState } from 'react';
import { OperationStatus } from 'src/lib/constants/status';
import {
  AlarmListTable,
  AlertListTable,
  BatteryStatus,
  StatusCard,
  StatusTable,
} from 'src/sections/dashboard-section';
import { ThermometerGauge, CircularIndicatorGauge } from 'src/components';
import {
  CURRENT_GAUGE_OPTIONS,
  VOLTAGE_GAUGE_OPTIONS,
} from 'src/components/circular-inidcator-gauge/constants';
import { CARD } from 'src/config-global';
import { shadows as customShadows } from 'src/theme/shadows';
// Redux
import { useDispatch, useSelector } from 'src/redux/store';
import { getDashboardInfo, getAlarmList } from 'src/redux/slices/dashboard';
// UI
import { IAlarmLevel, IAlarmType } from 'src/@types/alarm';
import { initGaugeInfo } from 'src/@types/dashboard';
// Route
import { useNavigate, createSearchParams } from 'react-router-dom';

export default function DashboardPage() {
  const dispatch = useDispatch();
  const { gauge, alarmList, alertList } = useSelector((store) => store.dashboard);
  const navigate = useNavigate();
  const [gaugeInfo, setGaugeInfo] = useState(initGaugeInfo);
  const shadows = customShadows();

  const handleClickStatus = () => {
    navigate({
      pathname: '/caec/alarm',
      search: `?${createSearchParams({
        alarmType: IAlarmType.OVER_TEMPERATURE,
        alarmLevel: IAlarmLevel.WARNING,
      })}`,
    });
  };

  useEffect(() => {
    dispatch(getDashboardInfo());
    dispatch(getAlarmList());

    setInterval(() => {
      dispatch(getDashboardInfo());
      dispatch(getAlarmList());
    }, 5000);
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
          <StatusCard
            system="PCS-M300"
            status={OperationStatus.WARNING}
            title="Overall Status"
            action={handleClickStatus}
          />
          <StatusCard
            system="PCS-M300"
            status={OperationStatus.WARNING}
            title="Temperature Status"
            action={handleClickStatus}
          />
          <StatusCard
            system="PCS-M300"
            status={OperationStatus.NORMAL}
            title="Over Charge Monitoring"
          />
          <StatusCard
            system="PCS-M300"
            status={OperationStatus.NORMAL}
            title="Over DisCharge Monitoring"
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
        <div className="col-span-1 flex justify-center">
          <CircularIndicatorGauge
            value={gaugeInfo?.voltage}
            options={{
              breakpoints: VOLTAGE_GAUGE_OPTIONS,
              title: 'Voltage',
              formatter: '{value} V',
              min: 0,
              max: 600,
              majorTicks: 10,
              minorTicks: 10,
            }}
          />
        </div>
        <div className="col-span-1 flex justify-center">
          <CircularIndicatorGauge
            value={gaugeInfo?.current}
            options={{
              breakpoints: CURRENT_GAUGE_OPTIONS,
              title: 'Current',
              formatter: '{value} A',
              min: 0,
              max: 180,
              majorTicks: 9,
              minorTicks: 10,
            }}
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
      <div className="w-full grid grid-cols-1 xl:grid-cols-4 gap-y-3 xl:gap-x-3 pb-3">
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
