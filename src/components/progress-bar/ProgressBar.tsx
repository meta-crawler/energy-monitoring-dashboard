import React from 'react';
import typography from 'src/theme/typography';

export default function ProgressBar({ progress }: { progress: number }) {
  if (progress <= 30) {
    return (
      <div className="flex flex-row items-center gap-x-2">
        <span
          className="text-text-primary flex-1"
          style={typography.overline}
        >{`${progress}%`}</span>
        <div className="w-full lg:w-32 h-1.5 bg-error-lighter overflow-hidden rounded-full">
          <div className="bg-error-main h-1.5" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    );
  } else if (progress <= 60) {
    return (
      <div className="flex flex-row items-center gap-x-2">
        <span
          className="text-text-primary flex-1"
          style={typography.overline}
        >{`${progress}%`}</span>
        <div className="w-full lg:w-32 h-1.5 bg-warning-lighter overflow-hidden rounded-full">
          <div className="bg-warning-main h-1.5" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    );
  } else if (progress <= 100) {
    return (
      <div className="flex flex-row items-center gap-x-2">
        <span
          className="text-text-primary flex-1"
          style={typography.overline}
        >{`${progress}%`}</span>
        <div className="w-full lg:w-32 h-1.5 bg-primary-lighter overflow-hidden rounded-full">
          <div className="bg-primary-main h-1.5" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    );
  }
}
