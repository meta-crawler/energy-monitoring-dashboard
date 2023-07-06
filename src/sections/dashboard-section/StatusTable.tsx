import React from 'react';
import { CARD } from 'src/config-global';
import { shadows as customShadows } from 'src/theme/shadows';
import typography from 'src/theme/typography';

export default function StatusTable() {
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
      <table className="w-full text-left" style={typography.body1}>
        <tbody>
          <tr className="bg-white border-b">
            <td className="py-2" style={typography.overline}>
              Online active time
            </td>
            <td className="py-2">56 Days</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-2" style={typography.overline}>
              Min Volt (V)
            </td>
            <td className="py-2">365</td>
          </tr>
          <tr className="bg-white">
            <td className="py-2" style={typography.overline}>
              Max Volt (V)
            </td>
            <td className="py-2">393</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
