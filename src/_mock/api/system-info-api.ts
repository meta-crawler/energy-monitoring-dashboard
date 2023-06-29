import mock from 'src/_mock/mock';
import systemInfoDb, { systemFields, systemList } from 'src/_mock/db/system-info-db';

mock.onGet('/api/get-system-infos').reply(() => {
  return [
    200,
    {
      data: systemInfoDb,
    },
  ];
});

mock.onGet('/api/get-system-info').reply((req: any) => {
  const { id } = req.params;
  return [
    200,
    {
      data: (systemInfoDb as any)[id],
    },
  ];
});

mock.onGet('/api/get-system-fields').reply(() => {
  return [
    200,
    {
      data: systemFields,
    },
  ];
});

mock.onGet('/api/get-system-list').reply(() => {
  return [
    200,
    {
      data: systemList,
    },
  ];
});
