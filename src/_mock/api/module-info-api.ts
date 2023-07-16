import mock from 'src/_mock/mock';
import {
  getRandomValue,
  getRoundedValue,
  getRandomTime,
  getLinearRandomValue,
} from '../utils/random';

const getModuleData = () => {
  const status = ['Normal', 'Warning', 'Abnormal'];
  const string = (Math.round(getRandomValue(2, 2)) % 3) + 1;
  const module = (Math.round(getRandomValue(10, 10)) % 20) + (string - 1) * 20 + 1;
  const time = getRandomTime();
  const percentT = Math.round(Math.random() * 100);
  const percentV = Math.round(Math.random() * 100);
  const tempStatusId = percentT < 90 ? 0 : percentT < 99 ? 1 : 2;
  const vStatusId = percentV < 90 ? 0 : percentV < 99 ? 1 : 2;
  const voltage = getRoundedValue(getLinearRandomValue(520, 540));
  const current = getRoundedValue(getLinearRandomValue(33, 37));
  const temp_01 = getRoundedValue(getRandomValue(30, 3), 1);
  const temp_02 = getRoundedValue(getRandomValue(30, 3), 1);
  const soc = getRoundedValue(getLinearRandomValue(90, 95), 0);

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
  const { total, string, module } = req.params;
  const modules = [...Array(total)].map((_) => getModuleData());

  if (
    string &&
    module &&
    !modules.some(
      (item) =>
        item.string === Number(string) &&
        item.module === Number(module) &&
        item.tempStatus === 'Warning',
    )
  ) {
    const id = modules.findIndex(
      (item) => item.string === Number(string) && item.module === Number(module),
    );
    modules[id].string = string;
    modules[id].module = module;

    modules[id].tempStatus = 'Warning';
  }

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
