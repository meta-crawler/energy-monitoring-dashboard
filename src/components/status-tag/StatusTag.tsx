import React from 'react';
import { ChargingStatus, OperationStatus } from 'src/lib/constants/status';
import typography from 'src/theme/typography';

export default function StatusTag({ status }: { status: OperationStatus | ChargingStatus }) {
  switch (status) {
    case OperationStatus.NORMAL:
      return (
        <div
          className="inline px-3 py-1 font-normal rounded-full capitalize text-success-main gap-x-2 bg-success-light/60"
          style={typography.body2}
        >
          {status}
        </div>
      );
    case OperationStatus.WARNING:
      return (
        <div
          className="inline px-3 py-1 font-normal rounded-full capitalize text-warning-main gap-x-2 bg-warning-light/60"
          style={typography.body2}
        >
          {status}
        </div>
      );
    case OperationStatus.DANGER:
      return (
        <div
          className="inline px-3 py-1 font-normal rounded-full capitalize text-error-main gap-x-2 bg-error-light/60"
          style={typography.body2}
        >
          {status}
        </div>
      );
    case ChargingStatus.CHARGING:
      return (
        <div
          className="inline px-3 py-1 font-normal rounded-full capitalize text-success-main gap-x-2 bg-success-light/60"
          style={typography.body2}
        >
          {status}
        </div>
      );
    case ChargingStatus.DISCHARGING:
      return (
        <div
          className="inline px-3 py-1 font-normal rounded-full capitalize text-success-main gap-x-2 bg-success-light/60"
          style={typography.body2}
        >
          {status}
        </div>
      );
  }
}
