import React from 'react';
import { useSettingsContext } from 'src/sections/settings';
import { useAuthContext } from 'src/auth/useAuthContext';
import { AiOutlineLogout } from 'react-icons/ai';
import typography from 'src/theme/typography';
import { useNavigate } from 'react-router-dom';
import { PATH_AUTH } from 'src/routes/paths';

export default function NavLogoutButton() {
  const { themeLayout } = useSettingsContext();
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div
      role="button"
      className={`w-full flex flex-row items-center h-14 hover:bg-grey-900/30 mb-3 text-grey-600 hover:text-grey-0 ${
        themeLayout === 'mini' ? 'px-0 justify-center' : 'px-6 justify-between'
      }`}
      onClick={() => navigate(PATH_AUTH.login)}
    >
      {themeLayout === 'mini' ? (
        <AiOutlineLogout size={25} />
      ) : (
        <div className="w-full flex flex-row items-center justify-between">
          <span className="text-grey-500 capitalize" style={typography.body1}>
            Logout
          </span>
          <AiOutlineLogout size={25} />
        </div>
      )}
    </div>
  );
}
