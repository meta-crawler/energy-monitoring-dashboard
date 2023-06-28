import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/redux/store';
import LoadingScreen from 'src/components/loading-screen';
import SystemInfo from './SystemInfo';

import { getSelectedSystem, getSystemFields } from 'src/redux/slices/system';

export default function StringInfoSection() {
  const dispatch = useDispatch();
  const { isLoading, activeSystem, systemFields, selectedSystem } = useSelector(
    (store) => store.system,
  );

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
      <div className="w-full lg:w-fit h-fit lg:h-full">
        <SystemInfo systemInfoFields={systemFields} systemInfoValue={selectedSystem} />
      </div>
    )
  );
}
