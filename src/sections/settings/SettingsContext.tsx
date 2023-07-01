import React, { createContext, useContext, useMemo, useCallback, useState } from 'react';
import { SettingsContextProps, ThemeLayoutValue } from 'src/sections/settings/types';
import { defaultSettings } from 'src/sections/settings/config-setting';

const initialState: SettingsContextProps = {
  ...defaultSettings,
  setLayout: (layout: ThemeLayoutValue) => {},
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

  const setLayout = useCallback(
    (layout: ThemeLayoutValue) => {
      setSettings({ ...settings, themeLayout: layout });
    },
    [setSettings, settings],
  );

  const memoizedValue = useMemo(
    () => ({
      ...settings,
      setLayout,
      onToggleMode,
      onToggleLayout,
    }),
    [settings, setLayout, onToggleMode, onToggleLayout],
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}
