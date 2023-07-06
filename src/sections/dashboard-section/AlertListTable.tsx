import React from 'react';
import AlertCard from './AlertCard';
import { IAlertInfo } from 'src/@types/dashboard';

type IAlertListTableProps = {
  alerts: IAlertInfo | null;
};

export default function AlertListTable({ alerts }: IAlertListTableProps) {
  return (
    <div className="flex flex-col gap-y-3">
      <AlertCard title="Temperature Alert" value={alerts?.temperature || 0} />
      <AlertCard title="Overcharge Alert Count" value={alerts?.overCharge || 0} />
      <AlertCard title="Overdischarge Alert Count" value={alerts?.overDisCharge || 0} />
    </div>
  );
}
