import axiosInstance from 'src/utils/axios';

export const getSystemFieldsApi = () => axiosInstance.get('/api/get-system-fields');

export const getSystemListApi = () => axiosInstance.get('/api/get-system-list');

export const getSystemInfosApi = () => axiosInstance.get('/api/get-system-infos');

export const getSystemInfoApi = (id: string) =>
  axiosInstance.get('/api/get-system-info', { params: { id } });
