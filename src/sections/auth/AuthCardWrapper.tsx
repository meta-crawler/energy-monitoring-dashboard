import React from 'react';
import { CARD } from 'src/config-global';
import { shadows as customShadows } from 'src/theme/shadows';

const AuthCardWrapper = ({ children }: { children: React.ReactNode }) => {
  const shadows = customShadows();
  return (
    <div
      className="flex-1 max-w-[400px] lg:max-w-[475px] m-2.5 md:m-3 p-3 sm:p-5 xl:p-9 bg-white"
      style={{
        boxShadow: shadows[CARD.BOX_SHADOW],
        borderRadius: `${CARD.BORDER_RADIUS}px`,
      }}
    >
      {children}
    </div>
  );
};

export default AuthCardWrapper;
