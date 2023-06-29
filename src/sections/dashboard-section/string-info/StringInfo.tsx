import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/redux/store';
import { getSelectedString, getStringFields } from 'src/redux/slices/string';
import { CARD } from 'src/config-global';
import { shadows as customShadows } from 'src/theme/shadows';
import colors from 'src/theme/colors';
import typography from 'src/theme/typography';
import ProgressBar from 'src/components/progress-bar';
import LoadingScreen from 'src/sections/loading-screen';

export default function StringInfo() {
  const dispatch = useDispatch();
  const { isLoading, activeString, stringFields, selectedString } = useSelector(
    (store) => store.string,
  );
  const shadows = customShadows();

  useEffect(() => {
    dispatch(getStringFields());
  }, [dispatch]);

  useEffect(() => {
    if (activeString) {
      const [systemId, stringId] = activeString.split('-');
      dispatch(getSelectedString(systemId, stringId));
    }
  }, [dispatch, activeString]);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    !!stringFields && !!selectedString && (
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
          String ID: {activeString} Information
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
                        style={typography.overline}
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-grey-300">
                  {Object.keys(stringFields[0]).map((key) => (
                    <tr key={key}>
                      <td className="px-4 py-1.5 whitespace-nowrap" style={typography.body2}>
                        <div>
                          <p className="text-text-primary">{(stringFields[0] as any)[key]}</p>
                        </div>
                      </td>

                      <td
                        className="px-4 py-1.5 whitespace-nowrap text-center"
                        style={typography.body2}
                      >
                        <p>{(selectedString[0] as any)[key]}</p>
                      </td>
                    </tr>
                  ))}

                  {Object.keys(stringFields[1]).map((key) => (
                    <tr key={key}>
                      <td className="px-4 py-1.5 whitespace-nowrap" style={typography.body2}>
                        <div>
                          <p className="text-text-primary">{(stringFields[1] as any)[key]}</p>
                        </div>
                      </td>

                      <td className="px-4 py-1.5 whitespace-nowrap" style={typography.body2}>
                        <ProgressBar progress={(selectedString[1] as any)[key]} />
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