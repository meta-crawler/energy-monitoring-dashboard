import axiosInstance from 'src/utils/axios';

export const getStringInfosApi = (systemId: string) =>
  axiosInstance.get('/api/get-string-infos', { params: systemId });

export const getStringFieldsApi = () => axiosInstance.get('/api/get-string-fields');

export const getStringInfoApi = (systemId: string, stringId: string) =>
  axiosInstance.get('/api/get-string-info', { params: { systemId, stringId } });
