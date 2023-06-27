import mock from 'src/_mock/mock';
import stringInfoDb from 'src/_mock/db/string-info-db';

mock.onGet('/api/get-strings-info').reply((req: any) => {
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
