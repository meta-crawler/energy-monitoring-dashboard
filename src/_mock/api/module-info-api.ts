import mock from 'src/_mock/mock';
import { getRandomValue, getRoundedValue, getRandomTime } from '../utils/random';

const getModuleData = () => {
  const status = ['Normal', 'Warning', 'Abnormal'];
  const string = Math.round(getRandomValue(2, 2)) % 3;
  const module = (Math.round(getRandomValue(10, 10)) % 20) + string * 20;
  const time = getRandomTime();
  const tempStatusId = Math.round(getRandomValue(2, 2)) % 3;
  const vStatusId = Math.round(getRandomValue(2, 2)) % 3;
  const voltage = getRoundedValue(getRandomValue(27, 2), 2);
  const current = 0;
  const temp_01 = getRoundedValue(getRandomValue(30, 3), 1);
  const temp_02 = getRoundedValue(getRandomValue(30, 3), 1);
  const soc = 0;

  return {
    string,
    module,
    time,
    tempStatus: status[tempStatusId],
    vStatus: status[vStatusId],
    voltage,
    current,
    temp_01,
    temp_02,
    soc,
  };
};

mock.onGet('/api/get-module-infos').reply((req: any) => {
  const { total } = req.params;
  const modules = [...Array(total)].map((_) => getModuleData());
  return [
    200,
    {
      data: modules,
    },
  ];
});

mock.onGet('/api/get-module-info').reply((req: any) => {
  return [
    200,
    {
      data: getModuleData(),
    },
  ];
});
