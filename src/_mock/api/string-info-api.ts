import mock from 'src/_mock/mock';
import stringInfoDb, { stringFields } from 'src/_mock/db/string-info-db';

mock.onGet('/api/get-string-infos').reply((req: any) => {
  const { systemId } = req.params;
  return [
    200,
    {
      data: (stringInfoDb as any)[systemId],
    },
  ];
});

mock.onGet('/api/get-string-info').reply((req: any) => {
  const { systemId, stringId } = req.params;
  return [
    200,
    {
      data: (stringInfoDb as any)[systemId][stringId],
    },
  ];
});

mock.onGet('/api/get-string-fields').reply(() => {
  return [
    200,
    {
      data: stringFields,
    },
  ];
});
