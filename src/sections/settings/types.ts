export type ThemeModeValue = 'light' | 'dark';
export type ThemeLayoutValue = 'vertical' | 'mini';

export type SettingsContextProps = SettingsValueProps & {
  onToggleMode: VoidFunction;
  onToggleLayout: VoidFunction;
};

export type SettingsValueProps = {
  themeMode: ThemeModeValue;
  themeLayout: ThemeLayoutValue;
};
