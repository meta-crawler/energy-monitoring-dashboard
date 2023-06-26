function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_ROOT = '/caec';

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
};

export const PATH_DASHBOARD = {
  root: ROOTS_ROOT,
  dashboard: path(ROOTS_ROOT, '/dashboard'),
  devices: path(ROOTS_ROOT, '/devices'),
  history: path(ROOTS_ROOT, '/history'),
  charge: path(ROOTS_ROOT, '/charge'),
  alert: path(ROOTS_ROOT, '/alert'),
  setting: path(ROOTS_ROOT, '/setting'),
};
