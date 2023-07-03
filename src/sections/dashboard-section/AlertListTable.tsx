import React from 'react';
import AlertCard from './AlertCard';

export default function AlertListTable() {
  return (
    <div className="flex flex-col gap-y-3">
      <AlertCard title="Temperature Alert" value={0} />
      <AlertCard title="Overcharge Alert Count" value={1} />
      <AlertCard title="Overdischarge Alert Count" value={1} />
    </div>
  );
}
