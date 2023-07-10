import React, { useMemo } from 'react';
import { shadows as customShadows } from 'src/theme/shadows';
import typography from 'src/theme/typography';
import { CARD } from 'src/config-global';
import { OperationStatus } from 'src/lib/constants/status';

type IStatusCardProps = {
  title: string;
  system: string;
  status: string;
};

export default function StatusCard({ title, system, status }: IStatusCardProps) {
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
      className="w-full flex flex-col items-center justify-between gap-2 bg-white"
      style={{
        padding: `${CARD.PADDING}px`,
        boxShadow: shadows[CARD.BOX_SHADOW],
        borderRadius: `${CARD.BORDER_RADIUS}px`,
      }}
    >
      <p className="flex-1 text-text-primary" style={typography.body2}>
        System(<span className="font-bold">{system}</span>)
      </p>
      <p className="flex-1 text-text-primary" style={typography.body1}>
        {title}
      </p>
      <div className={`flex items-center justify-center rounded-full h-fit py-2.5 ${statusColor}`}>
        <p
          className="uppercase px-10 text-center text-white font-black"
          style={typography.overline}
        >
          {status}
        </p>
      </div>
    </div>
  );
}
