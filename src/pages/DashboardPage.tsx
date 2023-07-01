import React from 'react';
import { OperationStatus } from 'src/lib/constants/status';
import { StatusCard, StatusTable, BatteryStatus } from 'src/sections/dashboard-section';

export default function DashboardPage() {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <div className="h-22 flex flex-col lg:flex-row gap-3">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3">
          <StatusCard status={OperationStatus.NORMAL} title={`System ${1} Status`} />
          <StatusCard status={OperationStatus.NORMAL} title="Temperature Status" />
          <StatusCard status={OperationStatus.WARNING} title="Over Charge Monitoring" />
          <StatusCard status={OperationStatus.NORMAL} title={`System ${1} Status`} />
        </div>
        <StatusTable />
      </div>
      <div className="flex flex-row">
        <BatteryStatus soc={30} chargingStatus={true} />
      </div>
    </div>
  );
}
