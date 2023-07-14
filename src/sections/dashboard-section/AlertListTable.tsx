import React from 'react';
import { IAlertInfo } from 'src/@types/dashboard';
import { CARD } from 'src/config-global';
import typography from 'src/theme/typography';
import { shadows as customShadows } from 'src/theme/shadows';

type IAlertListTableProps = {
  alerts: IAlertInfo | null;
};

export default function AlertListTable({ alerts }: IAlertListTableProps) {
  const shadows = customShadows();

  return (
    <div
      className="md:min-w-[300px] overflow-auto bg-white"
      style={{
        padding: `${CARD.PADDING}px`,
        boxShadow: shadows[CARD.BOX_SHADOW],
        borderRadius: `${CARD.BORDER_RADIUS}px`,
      }}
    >
      <p className="text-text-primary mb-6" style={typography.h4}>
        Today Alarm summary
      </p>
      <table className="w-full text-left text-text-primary" style={typography.body1}>
        <tbody>
          <tr className="bg-white border-b">
            <td className="py-2" style={typography.overline}>
              Temperature Alert
            </td>
            <td className="py-2">{alerts?.temperature}</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-2" style={typography.overline}>
              Overcharge Alert Count
            </td>
            <td className="py-2">{alerts?.overCharge}</td>
          </tr>
          <tr className="bg-white">
            <td className="py-2" style={typography.overline}>
              Overdischarge Alert Count
            </td>
            <td className="py-2">{alerts?.overDisCharge}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
