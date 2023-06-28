import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/redux/store';
import { getSelectedSystem, getSystemFields } from 'src/redux/slices/system';
import { CARD } from 'src/config-global';
import { shadows as customShadow } from 'src/theme/shadows';
import colors from 'src/theme/colors';
import typography from 'src/theme/typography';
import ProgressBar from 'src/components/progress-bar';
import StatusTag from 'src/components/status-tag';
import LoadingScreen from 'src/sections/loading-screen';

export default function SystemInfo() {
  const dispatch = useDispatch();
  const { isLoading, activeSystem, systemFields, selectedSystem } = useSelector(
    (store) => store.system,
  );
  const shadows = customShadow();

  useEffect(() => {
    dispatch(getSystemFields());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSelectedSystem(activeSystem!));
  }, [activeSystem, dispatch]);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    !!systemFields && !!selectedSystem && (
      <div
        className="w-full flex flex-col gap-y-3 h-full"
        style={{
          borderRadius: `${CARD.BORDER_RADIUS}px`,
          backgroundColor: colors('background.default'),
          boxShadow: shadows[CARD.BOX_SHADOW],
          padding: `${CARD.PADDING}px ${CARD.PADDING}px`,
        }}
      >
        <p style={{ ...typography.h4, color: colors('text.primary') }}>
          System ID: {activeSystem} Information
        </p>
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
                  {Object.keys(systemFields[0]).map((key) => (
                    <tr key={key}>
                      <td className="px-4 py-1.5 whitespace-nowrap" style={typography.body2}>
                        <div>
                          <p className="text-text-primary">{(systemFields[0] as any)[key]}</p>
                        </div>
                      </td>

                      <td
                        className="px-4 py-1.5 whitespace-nowrap text-center"
                        style={typography.body2}
                      >
                        <StatusTag status={(selectedSystem[0] as any)[key]} />
                      </td>
                    </tr>
                  ))}

                  {Object.keys(systemFields[1]).map((key) => (
                    <tr key={key}>
                      <td className="px-4 py-1.5 whitespace-nowrap" style={typography.body2}>
                        <div>
                          <p className="text-text-primary">{(systemFields[1] as any)[key]}</p>
                        </div>
                      </td>

                      <td
                        className="px-4 py-1.5 whitespace-nowrap text-center"
                        style={typography.body2}
                      >
                        <p>{(selectedSystem[1] as any)[key]}</p>
                      </td>
                    </tr>
                  ))}

                  {Object.keys(systemFields[2]).map((key) => (
                    <tr key={key}>
                      <td className="px-4 py-1.5 whitespace-nowrap" style={typography.body2}>
                        <div>
                          <p className="text-text-primary">{(systemFields[2] as any)[key]}</p>
                        </div>
                      </td>

                      <td className="px-4 py-1.5 whitespace-nowrap" style={typography.body2}>
                        <ProgressBar progress={(selectedSystem[2] as any)[key]} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
