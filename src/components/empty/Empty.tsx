import React from 'react';
import { AiOutlineInbox } from 'react-icons/ai';
import colors from 'src/theme/colors';
import typography from 'src/theme/typography';

export default function Empty() {
  return (
    <div className="w-full h-24 flex items-center justify-center gap-x-2">
      <AiOutlineInbox size={30} color={colors('text.secondary')} />
      <p className="text-text-primary" style={typography.body1}>
        No Data to Show
      </p>
    </div>
  );
}
