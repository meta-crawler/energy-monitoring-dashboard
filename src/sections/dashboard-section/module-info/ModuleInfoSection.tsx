import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/redux/store';
import { getModules } from 'src/redux/slices/module';
import LoadingScreen from 'src/sections/loading-screen';
import ModuleWithCells from './ModuleWithCells';
import { CARD } from 'src/config-global';
import colors from 'src/theme/colors';
import { shadows as customShadows } from 'src/theme/shadows';

export default function ModuleInfoSection() {
  const dispatch = useDispatch();
  const { activeString } = useSelector((store) => store.string);
  const { isLoading, modules } = useSelector((store) => store.module);
  const shadows = customShadows();

  useEffect(() => {
    if (activeString) {
      const [systemId, stringId] = activeString.split('-');
      dispatch(getModules(systemId, stringId));
    }
  }, [activeString, dispatch]);

  const handleSelectModule = (id: string) => {
    console.log('[Module]: ', id);
  };

  const handleSelectCell = (id: string) => {
    console.log('[Cell]: ', id);
  };

  return isLoading ? (
    <LoadingScreen />
  ) : (
    modules && (
      <div
        className="w-full flex flex-col gap-y-3"
        style={{
          borderRadius: `${CARD.BORDER_RADIUS}px`,
          backgroundColor: colors('background.default'),
          boxShadow: shadows[CARD.BOX_SHADOW],
          padding: `${CARD.PADDING}px ${CARD.PADDING}px`,
        }}
      >
        <div className="w-full flex flex-row flex-wrap gap-1 justify-around">
          {modules.map((module) => (
            <ModuleWithCells
              key={module.id}
              module={module}
              onSelectCell={handleSelectCell}
              onSelectModule={handleSelectModule}
            />
          ))}
        </div>
      </div>
    )
  );
}
