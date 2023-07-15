import axiosInstance from 'src/utils/axios';

export const getModuleInfosApi = (total: number, string?: number, module?: number) =>
  axiosInstance.get('/api/get-module-infos', {
    params: {
      total,
      string,
      module,
    },
  });

export const getModuleInfoApi = () => axiosInstance.get('/api/get-module-info');
