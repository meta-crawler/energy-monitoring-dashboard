import React from 'react';
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

export default function DashboardPage() {
  const shadows = customShadows();

  return (
    <div className="w-full h-full flex flex-col p-3 gap-3">
      <div className="h-22 flex flex-col lg:flex-row gap-3">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3">
          <StatusCard status={OperationStatus.NORMAL} title={`System ${1} Status`} />
          <StatusCard status={OperationStatus.NORMAL} title="Temperature Status" />
          <StatusCard status={OperationStatus.WARNING} title="Over Charge Monitoring" />
          <StatusCard status={OperationStatus.NORMAL} title={`System ${1} Status`} />
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
          <BatteryStatus soc={30} chargingStatus={false} />
        </div>
        <div className="col-span-1 flex justify-center -mb-10">
          <CircularGauge
            title="Voltage"
            value={230}
            options={{ unit: 'V', border: 9, breakpoints: VOLTAGE_OPTIONS }}
          />
        </div>
        <div className="col-span-1 flex justify-center -mb-10">
          <CircularGauge
            title="Current"
            value={40}
            options={{ unit: 'A', border: 9, breakpoints: CURRENT_OPTIONS }}
          />
        </div>
        <div className="col-span-1 flex flex-row justify-around items-center">
          <ThermometerGauge title="Min T" string={3} module={20} value={27} />
          <ThermometerGauge title="Max T" string={1} module={2} value={48} />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-4 xl:gap-6 pb-3">
        <div className="col-span-1 md:col-span-3">
          <AlarmListTable />
        </div>
        <div className="col-span-1">
          <AlertListTable />
        </div>
      </div>
    </div>
  );
}
