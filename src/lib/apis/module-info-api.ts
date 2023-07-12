import axiosInstance from 'src/utils/axios';

export const getModuleInfosApi = (total: number) =>
  axiosInstance.get('/api/get-module-infos', {
    params: {
      total,
    },
  });

export const getModuleInfoApi = () => axiosInstance.get('/api/get-module-info');
