function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
};

export const PATH_PAGE = {
  root: ROOTS_DASHBOARD,
  dashboard: path(ROOTS_DASHBOARD, '/'),
  devices: path(ROOTS_DASHBOARD, '/devices'),
  history: path(ROOTS_DASHBOARD, '/history'),
  charge: path(ROOTS_DASHBOARD, '/charge'),
  alert: path(ROOTS_DASHBOARD, '/alert'),
  setting: path(ROOTS_DASHBOARD, '/setting'),
};
