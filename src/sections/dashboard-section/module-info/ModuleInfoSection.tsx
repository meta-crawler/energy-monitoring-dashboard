import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/redux/store';
import { getModules } from 'src/redux/slices/module';
import LoadingScreen from 'src/sections/loading-screen';
import ModuleWithCells from './ModuleWithCells';

export default function ModuleInfoSection() {
  const dispatch = useDispatch();
  const { activeString } = useSelector((store) => store.string);
  const { isLoading, modules } = useSelector((store) => store.module);

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
    )
  );
}
