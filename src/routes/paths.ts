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
  alarm: path(ROOTS_ROOT, '/alarm'),
  devices: {
    root: path(ROOTS_ROOT, '/devices'),
    systems: path(ROOTS_ROOT, '/devices/systems'),
    strings: path(ROOTS_ROOT, '/devices/strings'),
    modules: path(ROOTS_ROOT, '/devices/modules'),
    cells: path(ROOTS_ROOT, '/devices/cells'),
  },
  history: {
    root: path(ROOTS_ROOT, '/history'),
    system: path(ROOTS_ROOT, '/history/system'),
    string: path(ROOTS_ROOT, '/history/string'),
    module: path(ROOTS_ROOT, '/history/module'),
    cell: path(ROOTS_ROOT, '/history/cell'),
  },
  export: path(ROOTS_ROOT, '/export'),
};
