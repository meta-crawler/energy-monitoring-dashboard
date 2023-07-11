import mock from '../mock';
import { getRoundedValue, getRandomValue } from '../utils/random';

mock.onGet('/api/get-gauges-info').reply((req: any) => {
  const chargingStatus = Math.round(getRandomValue(5, 5)) > 9;
  const soc = getRoundedValue(getRandomValue(40, 30), 0);
  const voltage = getRoundedValue(getRandomValue(240, 20));
  const current = getRoundedValue(getRandomValue(30, 20));

  const maxTV = getRoundedValue(getRandomValue(40, 20), 1);
  const maxTS = Math.round(getRandomValue(2, 1));
  const maxTM = Math.round(getRandomValue(10, 4));

  const minTV = getRoundedValue(getRandomValue(30, 15), 1);
  const minTS = Math.round(getRandomValue(2, 1));
  const minTM = Math.round(getRandomValue(10, 4));

  return [
    200,
    {
      data: {
        chargingStatus,
        soc,
        voltage,
        current,
        maxT: {
          value: maxTV,
          string: maxTS,
          module: maxTM,
        },
        minT: {
          value: minTV,
          string: minTS,
          module: minTM,
        },
      },
    },
  ];
});

mock.onGet('/api/get-alert-list').reply((req: any) => {
  const temperature = Math.round(getRandomValue(1, 2));
  const overCharge = Math.round(getRandomValue(1, 2));
  const overDisCharge = Math.round(getRandomValue(1, 2));

  return [
    200,
    {
      data: {
        temperature,
        overCharge,
        overDisCharge,
      },
    },
  ];
});
