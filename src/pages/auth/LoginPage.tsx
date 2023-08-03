import React from 'react';
// Auth Wrapper
import { AuthWrapper, AuthCardWrapper } from 'src/sections/auth';
// UI Component
import typography from 'src/theme/typography';
//
import { AuthLogin } from 'src/sections/auth';

const LoginPage = () => {
  return (
    <AuthWrapper>
      <AuthCardWrapper>
        <div className="w-full flex flex-col space-y-9 items-center justify-center">
          <div className="w-full">
            <p className="text-text-primary" style={typography.h3}>
              Login
            </p>
          </div>
          <AuthLogin />
        </div>
      </AuthCardWrapper>
    </AuthWrapper>
  );
};

export default LoginPage;
