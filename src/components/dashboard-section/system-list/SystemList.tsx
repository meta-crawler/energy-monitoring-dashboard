import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/redux/store';
import { getSystemList, setActiveSystem, setActiveString } from 'src/redux/slices/system';
import LoadingScreen from 'src/components/loading-screen';
import SystemListItem from './SystemListItem';
import { CARD, DASHBOARD } from 'src/config-global';
import colors from 'src/theme/colors';
import { shadows as customShadow } from 'src/theme/shadows';

export default function SystemList() {
  const dispatch = useDispatch();
  const { isLoading, activeSystem, activeString, systemList } = useSelector(
    (store) => store.system,
  );
  const shadows = customShadow();

  useEffect(() => {
    dispatch(getSystemList());
  }, [dispatch]);

  const handleSelectedSystem = (systemId: string) => {
    dispatch(setActiveSystem(systemId));
  };

  const handleSelectedString = (stringId: string) => {
    dispatch(setActiveString(stringId));
  };

  return isLoading ? (
    <LoadingScreen />
  ) : (
    !!systemList && (
      <div
        className="h-full overflow-y-auto"
        style={{
          width: `${DASHBOARD.W_LIST}px`,
          borderRadius: `${CARD.BORDER_RADIUS}px`,
          backgroundColor: colors('background.default'),
          boxShadow: shadows[CARD.BOX_SHADOW],
          padding: `${CARD.PADDING}px ${CARD.PADDING}px`,
        }}
      >
        <ul>
          {systemList.map((system) => (
            <SystemListItem
              key={system.id}
              system={system}
              activeString={activeString}
              open={activeSystem === system.id}
              onSystemSelect={handleSelectedSystem}
              onStringSelect={handleSelectedString}
            />
          ))}
        </ul>
      </div>
    )
  );
}
