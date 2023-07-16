import React, { useEffect } from 'react';
import { CARD } from 'src/config-global';
import typography from 'src/theme/typography';
import { shadows as customShadows } from 'src/theme/shadows';
import LoadingScreen from 'src/sections/loading-screen';
import { Empty } from 'src/components';
// Redux
import { useDispatch, useSelector } from 'src/redux/store';
import { getSystems } from 'src/redux/slices/system';

export default function SystemsPage() {
  const shadows = customShadows();
  const dispatch = useDispatch();
  const { isLoading, systems } = useSelector((store) => store.system);

  useEffect(() => {
    dispatch(getSystems());
  }, [dispatch]);

  return isLoading ? (
    <LoadingScreen />
  ) : (
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
                System ID
              </th>
              <th scope="col" className="px-2 py-4">
                Soc(%)
              </th>
              <th scope="col" className="px-2 py-4">
                Charge Status
              </th>
              <th scope="col" className="px-2 py-4">
                Current
              </th>
              <th scope="col" className="px-2 py-4">
                Voltage
              </th>
              <th scope="col" className="px-2 py-4">
                Overall Status
              </th>
              <th scope="col" className="px-2 py-4">
                Temperature Status
              </th>
              <th scope="col" className="px-2 py-4">
                Over charging alarm
              </th>
              <th scope="col" className="px-2 py-4">
                Link to it’s Strings
              </th>
            </tr>
          </thead>
          <tbody>
            {systems && systems.length ? (
              <></>
            ) : (
              <tr>
                <td className="w-full" colSpan={9}>
                  <Empty />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
