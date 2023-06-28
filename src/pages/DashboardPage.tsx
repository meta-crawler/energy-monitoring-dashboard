import React from 'react';

import StringInfoSection from 'src/components/dashboard-section/string-info';

export default function DashboardPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <StringInfoSection />
    </div>
  );
}
