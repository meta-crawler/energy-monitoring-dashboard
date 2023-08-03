import { PATH_DASHBOARD } from './routes/paths';

export const HOST_API_ROUTE = 'http://localhost';
export const HOST_API_PORT = 8000;

export const PATH_AFTER_LOGIN = PATH_DASHBOARD.dashboard;

export const HEADER = {
  H_MOBILE: 64,
  H_MAIN_DESKTOP: 88,
  H_DASHBOARD_DESKTOP: 92,
  H_DASHBOARD_DESKTOP_OFFSET: 92 - 32,
};

export const NAV = {
  W_BASE: 220,
  W_DASHBOARD: 240,
  W_DASHBOARD_MINI: 60,
  //
  H_DASHBOARD_ITEM: 48,
  H_DASHBOARD_ITEM_SUB: 36,
  //
  H_DASHBOARD_ITEM_HORIZONTAL: 32,
};

export const ICON = {
  NAV_ITEM: 24,
  NAV_ITEM_HORIZONTAL: 22,
  NAV_ITEM_MINI: 22,
};

export const CARD = {
  BORDER_RADIUS: 16,
  BOX_SHADOW: 6,
  PADDING: 18,
  PADDING_LARGE: 24,
};

export const DASHBOARD = {
  PADDING: 24,
  W_LIST: 220,
  LIST_CHEVRON_ICON: 12,
  LIST_STATUS_ICON: 15,
};
