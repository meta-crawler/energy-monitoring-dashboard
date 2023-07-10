import axiosInstance from 'src/utils/axios';

export const getSystemInfosApi = () => axiosInstance.get('/api/get-system-infos');

export const getSystemInfoApi = (id: string) =>
  axiosInstance.get('/api/get-system-info', { params: { id } });
