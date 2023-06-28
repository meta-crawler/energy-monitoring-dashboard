import React from 'react';
import { CARD } from 'src/config-global';
import { shadows as customShadow } from 'src/theme/shadows';
import colors from 'src/theme/colors';
import typography from 'src/theme/typography';
import { ChargingStatus, OperationStatus } from 'src/lib/types/status';
import { ISystemFields, ISystemInfo } from 'src/@types/system';

type ISystemInfoProps = {
  systemInfoFields: ISystemFields;
  systemInfoValue: ISystemInfo;
};

export default function SystemInfo({ systemInfoFields, systemInfoValue }: ISystemInfoProps) {
  const shadows = customShadow();

  const StatusTag = ({ status }: { status: OperationStatus | ChargingStatus }) => {
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
  };

  const ProgressBar = ({ progress }: { progress: number }) => {
    if (progress <= 30) {
      return (
        <div className="flex flex-row items-center gap-x-2">
          <span
            className="text-text-primary flex-1"
            style={typography.overline}
          >{`${progress}%`}</span>
          <div className="w-full lg:w-32 h-1.5 bg-error-lighter overflow-hidden rounded-full">
            <div className="bg-error-main h-1.5" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      );
    } else if (progress <= 60) {
      return (
        <div className="flex flex-row items-center gap-x-2">
          <span
            className="text-text-primary flex-1"
            style={typography.overline}
          >{`${progress}%`}</span>
          <div className="w-full lg:w-32 h-1.5 bg-warning-lighter overflow-hidden rounded-full">
            <div className="bg-warning-main h-1.5" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      );
    } else if (progress <= 100) {
      return (
        <div className="flex flex-row items-center gap-x-2">
          <span
            className="text-text-primary flex-1"
            style={typography.overline}
          >{`${progress}%`}</span>
          <div className="w-full lg:w-32 h-1.5 bg-primary-lighter overflow-hidden rounded-full">
            <div className="bg-primary-main h-1.5" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className="w-full flex flex-col gap-y-3"
      style={{
        borderRadius: `${CARD.BORDER_RADIUS}px`,
        backgroundColor: colors('background.default'),
        boxShadow: shadows[CARD.BOX_SHADOW],
        padding: `${CARD.PADDING}px ${CARD.PADDING}px`,
      }}
    >
      <p style={{ ...typography.h4, color: colors('text.primary') }}>System Information</p>
      <div className="-mx-4 -my-2 overflow-x-auto">
        <div className="inline-block min-w-full py-2 align-middle px-4">
          <div className="overflow-hidden border border-grey-300 md:rounded-md">
            <table className="min-w-full divide-y divide-grey-300">
              <thead className="bg-grey-200">
                <tr>
                  {['Field', 'Status'].map((item) => (
                    <th
                      key={item}
                      scope="col"
                      className="px-4 py-1.5 capitalize font-normal text-center text-text-secondary"
                      style={typography.body2}
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-grey-300">
                {Object.keys(systemInfoFields[0]).map((key) => (
                  <tr key={key}>
                    <td className="px-4 py-1.5 whitespace-nowrap" style={typography.body2}>
                      <div>
                        <p className="text-text-primary">{(systemInfoFields[0] as any)[key]}</p>
                      </div>
                    </td>

                    <td
                      className="px-4 py-1.5 whitespace-nowrap text-center"
                      style={typography.body2}
                    >
                      <StatusTag status={(systemInfoValue[0] as any)[key]} />
                    </td>
                  </tr>
                ))}

                {Object.keys(systemInfoFields[1]).map((key) => (
                  <tr key={key}>
                    <td className="px-4 py-1.5 whitespace-nowrap" style={typography.body2}>
                      <div>
                        <p className="text-text-primary">{(systemInfoFields[1] as any)[key]}</p>
                      </div>
                    </td>

                    <td
                      className="px-4 py-1.5 whitespace-nowrap text-center"
                      style={typography.body2}
                    >
                      <p>{(systemInfoValue[1] as any)[key]}</p>
                    </td>
                  </tr>
                ))}

                {Object.keys(systemInfoFields[2]).map((key) => (
                  <tr key={key}>
                    <td className="px-4 py-1.5 whitespace-nowrap" style={typography.body2}>
                      <div>
                        <p className="text-text-primary">{(systemInfoFields[2] as any)[key]}</p>
                      </div>
                    </td>

                    <td className="px-4 py-1.5 whitespace-nowrap" style={typography.body2}>
                      <ProgressBar progress={(systemInfoValue[2] as any)[key]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
