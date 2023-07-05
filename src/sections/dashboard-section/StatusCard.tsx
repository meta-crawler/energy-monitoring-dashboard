import React, { useMemo } from 'react';
import { shadows as customShadows } from 'src/theme/shadows';
import typography from 'src/theme/typography';
import { CARD } from 'src/config-global';
import { OperationStatus } from 'src/lib/constants/status';

type IStatusCardProps = {
  title: string;
  status: string;
};

export default function StatusCard({ title, status }: IStatusCardProps) {
  const shadows = customShadows();
  const statusColor = useMemo(() => {
    switch (status) {
      case OperationStatus.NORMAL:
        return 'bg-success-main';
      case OperationStatus.WARNING:
        return 'bg-warning-main';
      case OperationStatus.DANGER:
        return 'bg-error-main';
    }
  }, [status]);

  return (
    <div
      className="w-full flex flex-row items-center justify-between gap-x-2 bg-white"
      style={{
        padding: `${CARD.PADDING}px`,
        boxShadow: shadows[CARD.BOX_SHADOW],
        borderRadius: `${CARD.BORDER_RADIUS}px`,
      }}
    >
      <p className="flex-1 text-text-primary" style={typography.h6}>
        {title}
      </p>
      <div
        className={`flex items-center justify-center rounded-full w-20 h-fit py-2.5 ${statusColor}`}
      >
        <p className="uppercase text-center text-white font-black" style={typography.overline}>
          {status}
        </p>
      </div>
    </div>
  );
}
