import React, { useMemo } from 'react';
import { shadows as customShadows } from 'src/theme/shadows';
import typography from 'src/theme/typography';
import { CARD } from 'src/config-global';
import { OperationStatus } from 'src/lib/constants/status';

type IStatusCardProps = {
  system: string;
  title: string;
  status: string;
  action?: () => void;
};

export default function StatusCard({ system, title, status, action }: IStatusCardProps) {
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
      className="w-full flex flex-col items-center justify-between gap-y-3 bg-white"
      style={{
        padding: `${CARD.PADDING}px`,
        boxShadow: shadows[CARD.BOX_SHADOW],
        borderRadius: `${CARD.BORDER_RADIUS}px`,
      }}
    >
      <p className="flex-1 text-text-primary !font-medium" style={typography.h6}>
        System (<span className="font-bold">{system}</span>)
      </p>
      <p className="flex-1 text-text-primary font-medium" style={typography.body1}>
        {title}
      </p>
      <div
        role="button"
        className={`flex items-center justify-center rounded-full w-full h-fit py-2.5 ${statusColor}`}
        onClick={action}
      >
        <p className="uppercase text-center text-white font-black" style={typography.overline}>
          {status}
        </p>
      </div>
    </div>
  );
}
