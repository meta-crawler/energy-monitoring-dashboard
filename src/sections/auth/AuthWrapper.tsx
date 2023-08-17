import React from 'react';
import Logo from 'src/components/logo';
import useResponsive from 'src/hooks/useResponsive';

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useResponsive('down', 'md');

  return (
    <div className="bg-background-neutral min-h-screen">
      <div className="pl-6 pt-6">
        <Logo disabledLink={true} dark={true} />
      </div>
      <div
        className="w-full flex flex-col justify-center"
        style={{ minHeight: isMobile ? 'calc(100vh - 124px)' : 'calc(100vh - 112px)' }}
      >
        <div className="flex items-center justify-center">{children}</div>
      </div>
    </div>
  );
};

export default AuthWrapper;
