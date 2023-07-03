import React from 'react';
import { shadows as customShadows } from 'src/theme/shadows';
import typography from 'src/theme/typography';
import { CARD } from 'src/config-global';

type IStatusCardProps = {
  title: string;
  value: number;
};

export default function AlertCard({ title, value }: IStatusCardProps) {
  const shadows = customShadows();
  return (
    <div
      className="w-full bg-white"
      style={{
        padding: `${CARD.PADDING}px`,
        boxShadow: shadows[CARD.BOX_SHADOW],
        borderRadius: `${CARD.BORDER_RADIUS}px`,
      }}
    >
      <div className="flex flex-row items-center justify-between gap-x-2 px-3">
        <p className="flex-1 text-text-primary" style={typography.body1}>
          {title}
        </p>
        <p className="text-text-primary font-bold !text-lg" style={typography.overline}>
          {value}
        </p>
      </div>
    </div>
  );
}
