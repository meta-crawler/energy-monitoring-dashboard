import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/redux/store';
import LoadingScreen from 'src/components/loading-screen';
import SystemInfo from './SystemInfo';

import { getSelectedSystem, getSystemFields } from 'src/redux/slices/system';

export default function StringInfoSection() {
  const dispatch = useDispatch();
  const { systemFields, selectedSystem, isLoading } = useSelector((store) => store.system);

  useEffect(() => {
    dispatch(getSystemFields());
    dispatch(getSelectedSystem(`${1}`));
  }, [dispatch]);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    !!systemFields && !!selectedSystem && (
      <div className="w-full md:w-fit">
        <SystemInfo systemInfoFields={systemFields} systemInfoValue={selectedSystem} />
      </div>
    )
  );
}
