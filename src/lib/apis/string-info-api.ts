import axiosInstance from 'src/utils/axios';

export const getStringInfosApi = () => axiosInstance.get('/api/get-string-infos');

export const getStringInfoApi = ({ systemId, stringId }: { systemId: string; stringId: string }) =>
  axiosInstance.get('/api/get-string-info', { params: { systemId, stringId } });
