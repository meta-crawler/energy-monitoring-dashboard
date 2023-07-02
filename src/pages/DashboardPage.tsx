import React from 'react';
import { OperationStatus } from 'src/lib/constants/status';
import {
  StatusCard,
  StatusTable,
  BatteryStatus,
  CircularGauge,
} from 'src/sections/dashboard-section';
import { VOLTAGE_OPTIONS, CURRENT_OPTIONS } from 'src/sections/dashboard-section/constants';

export default function DashboardPage() {
  return (
    <div className="w-full h-full flex flex-col p-3 gap-9">
      <div className="h-22 flex flex-col lg:flex-row gap-3">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3">
          <StatusCard status={OperationStatus.NORMAL} title={`System ${1} Status`} />
          <StatusCard status={OperationStatus.NORMAL} title="Temperature Status" />
          <StatusCard status={OperationStatus.WARNING} title="Over Charge Monitoring" />
          <StatusCard status={OperationStatus.NORMAL} title={`System ${1} Status`} />
        </div>
        <StatusTable />
      </div>
      <div className="flex flex-row gap-6">
        <BatteryStatus soc={30} chargingStatus={false} />
        <CircularGauge
          title="Voltage"
          value={230}
          options={{ unit: 'V', border: 9, breakpoints: VOLTAGE_OPTIONS }}
        />
        <CircularGauge
          title="Current"
          value={40}
          options={{ unit: 'A', border: 9, breakpoints: CURRENT_OPTIONS }}
        />
      </div>
    </div>
  );
}
