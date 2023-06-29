import mock from 'src/_mock/mock';
import moduleInfoDb from 'src/_mock/db/module-info-db';

mock.onGet('/api/get-module-infos').reply((req: any) => {
  const { systemId, stringId } = req.params;
  return [
    200,
    {
      data: (moduleInfoDb as any)[systemId][stringId],
    },
  ];
});

mock.onGet('/api/get-module-info').reply((req: any) => {
  const { systemId, stringId, moduleId } = req.params;
  return [
    200,
    {
      data: (moduleInfoDb as any)[systemId][stringId][moduleId],
    },
  ];
});
