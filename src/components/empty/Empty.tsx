import React from 'react';
import typography from 'src/theme/typography';
import { AiOutlineInbox } from 'react-icons/ai';

export default function Empty() {
  return (
    <div className="w-full flex flex-row items-center justify-center gap-x-3 py-6 text-text-secondary">
      <AiOutlineInbox size={30} />
      <p className="text-text-primary" style={typography.body1}>
        No Data
      </p>
    </div>
  );
}
