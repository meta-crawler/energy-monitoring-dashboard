import axiosInstance from 'src/utils/axios';

export const getModuleInfosApi = ({ systemId, stringId }: { systemId: string; stringId: string }) =>
  axiosInstance.get('/api/get-module-infos', { params: { systemId, stringId } });

export const getModuleInfoApi = ({
  systemId,
  stringId,
  moduleId,
}: {
  systemId: string;
  stringId: string;
  moduleId: string;
}) => axiosInstance.get('/api/get-module-info', { params: { systemId, stringId, moduleId } });
