import axiosInstance from 'src/utils/axios';

export const getModuleInfosApi = () => axiosInstance.get('/api/get-module-infos');

export const getModuleInfoApi = () => axiosInstance.get('/api/get-module-info');
