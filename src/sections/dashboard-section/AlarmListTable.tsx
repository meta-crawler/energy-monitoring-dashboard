import React from 'react';
import { CARD } from 'src/config-global';
import typography from 'src/theme/typography';
import { shadows as customShadows } from 'src/theme/shadows';
import { BiLink } from 'react-icons/bi';

export default function AlarmListTable() {
  const shadows = customShadows();
  return (
    <div
      className="w-full bg-white"
      style={{
        boxShadow: shadows[CARD.BOX_SHADOW],
        borderRadius: `${CARD.BORDER_RADIUS}px`,
        padding: `${CARD.PADDING}px`,
      }}
    >
      <div className="relative overflow-x-auto bg-white rounded-lg border border-grey-300">
        <table className="w-full text-center">
          <thead
            className="bg-grey-200 text-text-primary border-b border-b-grey-300"
            style={typography.overline}
          >
            <tr>
              <th scope="col" className="px-2 py-4">
                No
              </th>
              <th scope="col" className="px-2 py-4">
                Time
              </th>
              <th scope="col" className="px-2 py-4">
                Type
              </th>
              <th scope="col" className="px-2 py-4">
                Level
              </th>
              <th scope="col" className="px-2 py-4">
                Message
              </th>
              <th scope="col" className="px-2 py-4">
                Fixed Status
              </th>
              <th scope="col" className="px-2 py-4">
                Link to data
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th scope="row" className="px-3 py-4 font-regular" style={typography.body2}>
                1
              </th>
              <td className="px-3 py-4">2023-06-23 10:30:40</td>
              <td className="px-3 py-4">System</td>
              <td className="px-3 py-4">Info</td>
              <td className="px-3 py-4">
                Too Many RS485 Error Found. [4449] Errors-SAMPLING SERVICE
              </td>
              <td className="px-3 py-4 capitalize">
                <span
                  className="px-2 py-1 rounded-full bg-success-main text-success-darker"
                  style={typography.caption}
                >
                  Fixed
                </span>
              </td>
              <td className="px-3 py-4">
                <div role="button" className="w-full flex items-center justify-center">
                  <BiLink />
                </div>
              </td>
            </tr>
            <tr className="bg-grey-200 border-b">
              <th scope="row" className="px-3 py-4 font-regular" style={typography.body2}>
                2
              </th>
              <td className="px-3 py-4">2023-06-24 10:30:40</td>
              <td className="px-3 py-4">System</td>
              <td className="px-3 py-4">Info</td>
              <td className="px-3 py-4">
                Too Many RS485 Error Found. [4449] Errors-SAMPLING SERVICE
              </td>
              <td className="px-3 py-4 capitalize">
                <span
                  className="px-2 py-1 rounded-full bg-error-main text-error-darker"
                  style={typography.caption}
                >
                  Pending
                </span>
              </td>
              <td className="px-3 py-4">
                <div role="button" className="w-full flex items-center justify-center">
                  <BiLink />
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th scope="row" className="px-3 py-4 font-regular" style={typography.body2}>
                3
              </th>
              <td className="px-3 py-4">2023-06-25 10:30:40</td>
              <td className="px-3 py-4">System</td>
              <td className="px-3 py-4">Info</td>
              <td className="px-3 py-4">
                Too Many RS485 Error Found. [4449] Errors-SAMPLING SERVICE
              </td>
              <td className="px-3 py-4 capitalize">
                <span
                  className="px-2 py-1 rounded-full bg-success-main text-success-darker"
                  style={typography.caption}
                >
                  Fixed
                </span>
              </td>
              <td className="px-3 py-4">
                <div role="button" className="w-full flex items-center justify-center">
                  <BiLink />
                </div>
              </td>
            </tr>
            <tr className="bg-grey-200 border-b">
              <th scope="row" className="px-3 py-4 font-regular" style={typography.body2}>
                4
              </th>
              <td className="px-3 py-4">2023-06-26 10:30:40</td>
              <td className="px-3 py-4">System</td>
              <td className="px-3 py-4">Info</td>
              <td className="px-3 py-4">
                Too Many RS485 Error Found. [4449] Errors-SAMPLING SERVICE
              </td>
              <td className="px-3 py-4 capitalize">
                <span
                  className="px-2 py-1 rounded-full bg-success-main text-success-darker"
                  style={typography.caption}
                >
                  Fixed
                </span>
              </td>
              <td className="px-3 py-4">
                <div role="button" className="w-full flex items-center justify-center">
                  <BiLink />
                </div>
              </td>
            </tr>
            <tr className="bg-white">
              <th scope="row" className="px-3 py-4 font-regular" style={typography.body2}>
                5
              </th>
              <td className="px-3 py-4">2023-06-27 10:30:40</td>
              <td className="px-3 py-4">System</td>
              <td className="px-3 py-4">Info</td>
              <td className="px-3 py-4">
                Too Many RS485 Error Found. [4449] Errors-SAMPLING SERVICE
              </td>
              <td className="px-3 py-4 capitalize">
                <span
                  className="px-2 py-1 rounded-full bg-success-main text-success-darker"
                  style={typography.caption}
                >
                  Fixed
                </span>
              </td>
              <td className="px-3 py-4">
                <div role="button" className="w-full flex items-center justify-center">
                  <BiLink />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
