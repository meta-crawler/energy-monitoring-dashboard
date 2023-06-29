import React from 'react';
import { CARD } from 'src/config-global';
import colors from 'src/theme/colors';
import typography from 'src/theme/typography';
import { shadows as customShadows } from 'src/theme/shadows';

export function StringAlertSection() {
  const shadows = customShadows();

  return (
    <div
      className="w-full flex flex-col gap-y-3"
      style={{
        borderRadius: `${CARD.BORDER_RADIUS}px`,
        backgroundColor: colors('background.default'),
        boxShadow: shadows[CARD.BOX_SHADOW],
        padding: `${CARD.PADDING}px ${CARD.PADDING}px`,
      }}
    >
      <p className="text-text-primary" style={typography.h4}>
        String Alert
      </p>
    </div>
  );
}
