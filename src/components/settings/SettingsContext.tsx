import React, { createContext, useEffect, useContext, useMemo, useCallback, useState } from 'react';
import { SettingsContextProps } from 'src/components/settings/types';
import { defaultSettings } from 'src/components/settings/config-setting';

const initialState: SettingsContextProps = {
  ...defaultSettings,
  onToggleMode: () => {},
  onToggleLayout: () => {},
};

export const SettingsContext = createContext(initialState);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context) throw new Error('useSettingsContext must be use inside SettingsProvider');

  return context;
};

type SettingsProviderProps = {
  children: React.ReactNode;
};

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useState(defaultSettings);

  const onToggleMode = useCallback(() => {
    const themeMode = settings.themeMode === 'light' ? 'dark' : 'light';
    setSettings({ ...settings, themeMode });
  }, [setSettings, settings]);

  const onToggleLayout = useCallback(() => {
    const themeLayout = settings.themeLayout === 'vertical' ? 'mini' : 'vertical';
    setSettings({ ...settings, themeLayout });
  }, [setSettings, settings]);

  const memoizedValue = useMemo(
    () => ({
      ...settings,
      onToggleMode,
      onToggleLayout,
    }),
    [settings, onToggleMode, onToggleLayout],
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}
