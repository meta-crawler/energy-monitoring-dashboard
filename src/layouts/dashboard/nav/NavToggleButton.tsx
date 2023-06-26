import React from 'react';
import { useSettingsContext } from 'src/components/settings';
import { useColor } from 'src/hooks/useColor';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

export default function NavToggleButton() {
  const colors = useColor;
  const { themeLayout, onToggleLayout } = useSettingsContext();

  return (
    <div role="button" className="p-2 rounded hover:bg-grey-700" onClick={onToggleLayout}>
      {themeLayout === 'mini' ? (
        <AiOutlineMenuUnfold size={25} color={colors('white')} />
      ) : (
        <AiOutlineMenuFold size={25} color={colors('white')} />
      )}
    </div>
  );
}
