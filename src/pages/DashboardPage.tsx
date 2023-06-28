import React, { useEffect } from 'react';
import { DASHBOARD } from 'src/config-global';
import { useDispatch } from 'src/redux/store';
import { setActiveSystem, setActiveString } from 'src/redux/slices/system';
import SystemList from 'src/components/dashboard-section/system-list';
import StringInfoSection from 'src/components/dashboard-section/string-info';

export default function DashboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveSystem('1'));
    dispatch(setActiveString('1-1'));
  }, [dispatch]);

  return (
    <div
      className="w-full flex flex-row gap-x-3"
      style={{ height: `calc(100vh - ${DASHBOARD.PADDING * 2}px)` }}
    >
      <div style={{ width: `${DASHBOARD.W_LIST}px` }}>
        <SystemList />
      </div>
      <StringInfoSection />
    </div>
  );
}
