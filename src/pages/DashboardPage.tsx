import React from 'react';
import SystemInfo from 'src/components/dashboard-section/string-info/SystemInfo';

export default function DashboardPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-full lg:w-fit">
        <SystemInfo />
      </div>
    </div>
  );
}
