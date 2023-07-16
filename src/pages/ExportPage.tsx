import React from 'react';
import { useSearchParams } from 'react-router-dom';
import typography from 'src/theme/typography';

export default function ExportPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <p style={typography.h1}>Export</p>
    </div>
  );
}
